import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import Thumbnail from "./thumbnail"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import InfiniteScroll from "react-infinite-scroll-component"

class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEdges: this.props.edges.slice(0, 20)
    }
  }

  fetchMoreData = () => {
    const currentEdges = this.state.currentEdges
    const currentEdgeCount = currentEdges.length
    const nextEdges = this.props.edges.slice(
        currentEdgeCount,
        currentEdgeCount + 20
    )
    this.setState({ currentEdges: currentEdges.concat(nextEdges) })
  }

  hasMore = () => {
    return this.state.currentEdges.length < this.props.edges.length
  }

  render() {
    return (
      <Layout>
        <InfiniteScroll
          dataLength={this.state.currentEdges.length}
          next={this.fetchMoreData}
          hasMore={this.hasMore()}
          style={{overflow: 'visible'}}
        >
          <GridList style={styles.photoList}>
            {
              this.state.currentEdges.map(edge => {
                const PhotoListItem = () => (
                  <Link
                    to={`/photos/${edge.node.strapiId}`}
                    style={styles.photoListItem}>
                    <Thumbnail image={edge.node.image}/>
                  </Link>
                )

                return (
                  <GridListTile
                    key={edge.node.strapiId}
                    component={PhotoListItem}
                  />
                )
              })
            }
          </GridList>
        </InfiniteScroll>
      </Layout>
    )
  }
}

const styles = {
  photoList: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 75,
  },
  photoListItem: {
    width: '27.5%',
    minWidth: 90,
    maxWidth: 320,
    marginBottom: 14,
    marginLeft: 7,
    marginRight: 7,
  }
}

export default PhotoGrid
