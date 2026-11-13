import type { CSSProperties } from "react";
import type { ArchiveTheme } from "./types";

type ThemeStyle = CSSProperties & Record<`--archive-${string}`, string>;

// Archive palettes follow the supplied reference hex colors.
export const themes: Record<ArchiveTheme, ThemeStyle> = {
  googlecleaner: {
    "--archive-ink": "#302b3d", "--archive-orange": "#e9b9c7",
    "--archive-yellow": "#c4bcdd", "--archive-pink": "#e5dff0",
    "--archive-sage": "#a7b8e8", "--archive-blue": "#a7b8e8",
    "--archive-background": "#f7f0e3", "--archive-panel": "#f7f3e9",
    "--archive-muted": "#625869", "--archive-selected": "#e5dff0",
    "--archive-tint": "#e5dff0", "--archive-label": "#584779",
    "--archive-focus": "#1b4fd1", "--archive-rule": "#898390",
    "--archive-reflection": "#e5dff0", "--archive-link": "#584779",
  },
};
