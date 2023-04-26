import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

const ListGroupItemWrapper = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
  .title {
    flex: 1;
    font-weight: 500;
    font-size: 16px;
  }
  &.completed {
    .title {
      text-decoration: line-through;
      color: gray;
    }
  }
`;

export default ListGroupItemWrapper;
