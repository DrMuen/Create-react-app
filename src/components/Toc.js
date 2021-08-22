import React, { Component } from "react";

class Toc extends Component {
  render() {
    var list = [];
    var data = this.props.data;
    let i = 0;
    while (i < data.length) {
      list.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id = {data[i].id}
            onClick={(sexy) => {
              sexy.preventDefault();
              this.props.onChangePage(sexy.target.dataset.id);
            }}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default Toc;
