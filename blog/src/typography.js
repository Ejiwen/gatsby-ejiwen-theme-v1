import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

const typography = new Typography({
    ...lincolnTheme, headerColor: 'white',
    overrideThemeStyles: () => ({
        a: {
            textShadow: null,
        }
    })
})

// Export helper functions
const { rhythm, scale } = typography
export { rhythm, scale, typography as default }