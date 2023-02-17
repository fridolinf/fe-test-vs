import { screen, render } from "@testing-library/react";
import Avatar from "../../components/avatar";
import renderer from "react-test-renderer";
const AvatarWrapper = () => {
  render(<Avatar maxLength={8} size="xs" />);
};

test("Props in avatar rendered well", async () => {
  AvatarWrapper(); //render component
  const avatar = screen.getByTitle(/avatar-first-wrapper/i); //get avatar wrapper with title="avatar-first-wrapper"
  const avatarImg = screen.getAllByRole("img"); //get tag <img/>
  const countTextComponent = screen.getByTitle(/count-max/i); //get component have title="count-max"
  const wrapperCount = screen.getByTitle(/count-wrapper/i); //get component have title="count-wrapper"

  expect(avatar).toBeInTheDocument(); //expect avatar component to render in document
  expect(avatarImg).toHaveLength(3); //expect <img/> to render 3 times
  expect(countTextComponent).toBeInTheDocument(); //expect component to render in document
  expect(countTextComponent).toHaveTextContent(new RegExp(+5)); //expect component to have text "+5"
  expect(avatarImg[0]).toHaveClass("avatar-img", "xs"); //expect component to have className="avatar-img xs"
  expect(wrapperCount).toBeInTheDocument(); //expect wrapper component to render in document
  expect(wrapperCount).toHaveClass("avatar-img-max", "xs"); //expect component to have className="avatar-img-max xs"
});

test("Matches DOM Snapshot", () => {
  const domTree = renderer.create(<Avatar />); //create snapshot
  expect(domTree).toMatchSnapshot(); //expect create snapshot file
});
