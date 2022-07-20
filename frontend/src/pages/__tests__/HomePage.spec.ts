import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HomePage from "../HomePage.vue";
import router from "@/router";

describe("Home page", () => {
  it("redirects to game page on button click", async () => {
    const wrapper = mount(HomePage);

    router.push = vi.fn();
    await wrapper.findComponent("#title-btn").trigger("click");

    expect(router.push).toHaveBeenCalledTimes(1);
  });
});
