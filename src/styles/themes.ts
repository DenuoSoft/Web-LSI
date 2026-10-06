export const themes = {
	default: { background: "#555a69", text: "#c8d2e6", logo: "#28282d"},
    light: { background: "#c8d2e6", text: "#555a69", logo: "#28282d" },
    white: { background: "#fff", text: "#555a69", logo: "#28282d" },
	
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = (typeof themes)[ThemeName];