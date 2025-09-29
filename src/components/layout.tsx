import Feed from "./feed";
import Sidebar from "./sidebar";
import { Aside, LayoutWrapper, Main } from "./styles/layout.styles";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Main>
        <Feed />
      </Main>
      <Aside>
        <Sidebar />
      </Aside>
    </LayoutWrapper>
  );
}
