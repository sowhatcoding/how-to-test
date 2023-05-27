import { video } from "../../../video";

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

test("plays video", () => {
  const play = jest.spyOn(video, "play");
  const isPlaying = video.play();

  expect(play).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
