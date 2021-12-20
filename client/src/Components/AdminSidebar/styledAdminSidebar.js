import styled from "styled-components";

export const StyledAdminSidebar = styled.div`
  flex: 1;
  height: calc(100vh - 120px);
  position: sticky;
  top: 120px;
  background-color: #ccc;
  .sidebarWrapper {
    padding: 15px;    
    .sidebarMenu {
      margin-bottom: 10px;

      .sidebarTitle {
        font-size: 0.8em;
        color: #666;
      }
      .sidebarList {
        font-size: 0.7em;
        padding: 10px;
      }
      .sidebarListItem {
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        border-radius: 10px;
        &:hover {
          background-color: #aaa;
        }
        .active {
          background-color: #aaa;
        }
        .sidebarIcon {
          margin-right: 5px;
          font-size: 20px;
        }
      }
    }
  }
`;
