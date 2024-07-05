interface Address {
  city: string;
  country: string;
}
interface User {
  name: string;
  age: number;
  email: "john@example.com";
  address?: Address;
}
