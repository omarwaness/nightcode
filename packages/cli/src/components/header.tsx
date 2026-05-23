import { useTheme } from '../providers/theme'

export function Header() {
  const { colors } = useTheme()

  return (
    <box justifyContent="center" alignItems="center">
      <box
        flexDirection="row"
        justifyContent="center"
        gap={0.5}
        alignItems="center"
      >
        <ascii-font font="tiny" text="Night" color={colors.mutedForeground} />
        <ascii-font font="tiny" text="Code" color={colors.foreground} />
      </box>
    </box>
  )
}
