//import MyComponent from "./ui/my-component";
import Popover from "./ui/popover";

export default function Home() {
  return (
    <div className="m-10">
      <h1 className="mb-5 text-3xl">This is Popover sample</h1>
      <div className="ml-32">
        <Popover
          content={
            <div className="bg-blue-500 p-5">This is the popover content!</div>
          }>
          <p className="text-2xl">Click Me</p>
        </Popover>
      </div>
      <p>This is the test.</p>
    </div>
  );
}
