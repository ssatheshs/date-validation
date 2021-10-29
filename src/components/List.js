


class List extends React.Component {
    render() {
       <div>
          {this.props.data
            .map(t => <span>{t}</span>)
            .reduce((prev, curr) => [prev, ', ', curr])}
       </div>
    }
  }


  export default List