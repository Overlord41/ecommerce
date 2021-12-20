import styled from "styled-components";

export const StyledAdminTopbar = styled.div`
  font-size: 2em;
  position: sticky;
  top: 0;
  padding: 10px;
  border-bottom: 1px #555 dotted;
  z-index: 999;
  .topbarWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .topLeft {
      .logo {
        font-weight: bold;
        color: darkblue;
        cursor: pointer;
      }
    }
    .topRight {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .topbarIconContainer {
        margin-right: 10px;
        position: relative;
        cursor: pointer;
        .icon {
          font-size: 25px;
        }
        .topIconBadge {
          position: absolute;
          top: -5px;
          right: 0px;
          font-size: 0.7em;
          color: white;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: red;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;
