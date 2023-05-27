import { video } from "../../../video";

jest.mock("../../../video");

test("plays video", () => {
  const isPlaying = video.play();

  expect(video.play).toHaveBeenCalled();
  expect(isPlaying).toBe(undefined);
});
