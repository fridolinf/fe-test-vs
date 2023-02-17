import { screen, render } from "@testing-library/react";
import App from "../../App";
import renderer from "react-test-renderer";
const AppWrapper = () => {
  render(<App />);
};
test("Default component has rendered in app", async () => {
  AppWrapper(); //render component

  const firstDiv = screen.getByTitle(/app-wrapper/i); //get first div component by title="app-wrapper"
  const avatar = screen.getByTitle(/avatar-first-wrapper/i); //get avatar component by title="avatar-first-wrapper"

  expect(firstDiv).toBeInTheDocument(); //expect first div component to render in document
  expect(avatar).toBeInTheDocument(); //expect avatar component to render in document
});

test("Matches DOM Snapshot", () => {
  const domTree = renderer.create(<App />); //create snapshot
  expect(domTree).toMatchSnapshot(); //expect create snapshot file
});
