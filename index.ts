//1
abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof");
  }
}

const myDog = new Dog();
myDog.makeSound();

//2
class User {
  public readonly id: number;
  private email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }

  public changeEmail(newEmail: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(newEmail)) {
      console.log("Noto‘g‘ri email formati!");
      return false;
    }

    this.email = newEmail;
    console.log("Email muvaffaqiyatli o‘zgartirildi.");
    return true;
  }
}

const user = new User(1, "old@example.com");
console.log(user.getEmail());

user.changeEmail("new@email.com");
console.log(user.getEmail());

user.changeEmail("xato-format");


//3
class SecureUserAccount {
  private _username: string;
  private _email: string;
  private _password: string;
  private _loginAttempts: number = 0;
  private _isBlocked: boolean = false;

  constructor(username: string, email: string, password: string) {
      this.setUsername(username);
      this.setEmail(email);
      this.setPassword(password);
  }

  private setUsername(value: string) {
      if (value.trim().length < 3) {
          throw new Error("Username kamida 3 belgidan iborat bo‘lishi kerak");
      }
      this._username = value.trim();
  }

  private setEmail(value: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
          throw new Error("Noto‘g‘ri email formati");
      }
      this._email = value;
  }

  private setPassword(value: string) {
      if (value.length < 6) {
          throw new Error("Parol kamida 6 belgidan iborat bo‘lishi kerak");
      }
      this._password = value;
  }

  public status(): string {
      return this._isBlocked ? "Blocked" : "Active";
  }

  public login(password: string): boolean {
      if (this._isBlocked) {
          console.log("Account bloklangan!");
          return false;
      }

      if (password === this._password) {
          this._loginAttempts = 0;
          console.log("Muvaffaqiyatli kirish!");
          return true;
      } else {
          this._loginAttempts++;
          console.log(`Noto‘g‘ri parol! Urinish: ${this._loginAttempts}/3`);

          if (this._loginAttempts >= 3) {
              this._isBlocked = true;
              console.log("Account bloklandi!");
          }
          return false;
      }
  }

  public getInfo() {
      return {
          username: this._username,
          email: this._email,
          status: this.status(),
          loginAttempts: this._loginAttempts
      };
  }
}

const account = new SecureUserAccount("john_doe", "john@example.com", "secret123");

console.log(account.status());

account.login("wrongpass");
account.login("wrongpass2");
account.login("wrongpass3");

console.log(account.status());

account.login("secret123");