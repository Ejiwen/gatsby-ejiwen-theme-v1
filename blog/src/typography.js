import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

const typography = new Typography({
    // ...lincolnTheme, headerColor: 'text',
    ...lincolnTheme, headerColor: '',
    overrideThemeStyles: () => ({
        a: {
            textShadow: null,
            color: "inherit",
        }
    })
})

// Export helper functions
const { rhythm, scale } = typography
export { rhythm, scale, typography as default }