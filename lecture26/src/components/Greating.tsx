import { UserProps } from "../types/user";

export interface GreatingProps {
  user: UserProps;
}

export default function Greating(props: GreatingProps) {
  const { user } = props;
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>My name is {user.name}</h1>
      <h1>I am {user.age} years old</h1>
      <div>
        <h1>it's me</h1>
        <img src={user.avatar} alt="myPhoto" />
      </div>
      <h1>I work as a {user.profession}</h1>
    </div>
  );
}
