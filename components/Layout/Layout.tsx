import { FC } from "react";
import styles from "./Layout.module.scss"
import { layoutProps } from "./types";

const Layout: FC<layoutProps> = ({children}) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Layout
