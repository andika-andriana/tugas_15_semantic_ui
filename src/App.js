import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Grid,
  Search,
  Icon,
  Table,
  Menu,
  Label,
  Feed,
  Header,
  Comment,
  Form,
  Button
} from "semantic-ui-react";
function App() {
  return (
    <div>
      <Container style={{ marginTop: 10 }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2" textAlign="right">
                <Search placeholder="Search Document..." />
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <Grid coloumns={2}>
          <Grid.Column width={5}>
            <Comment.Group threaded>
              <Header as="h3" dividing>
                Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                  alt="x"
                />
                <Comment.Content>
                  <Comment.Author as="a">Satria</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>Hallo!</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  alt="x"
                />
                <Comment.Content>
                  <Comment.Author as="a">Danang</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:50PM</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Kerjakan Sesuatu Semampu Kamu...</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                      alt="x"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Ricky</Comment.Author>
                      <Comment.Metadata>
                        <span>Just now</span>
                      </Comment.Metadata>
                      <Comment.Text>Kmu Sekarang Dimana Danang?</Comment.Text>
                      <Comment.Actions>
                        <a href="/">Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                  alt="x"
                />
                <Comment.Content>
                  <Comment.Author as="a">Joe</Comment.Author>
                  <Comment.Metadata>
                    <span>1 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Comment.Group>
          </Grid.Column>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={5}>
            <Feed size="small">
              <Feed.Event>
                <Feed.Label
                  image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  alt="alt-aja"
                />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>4 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label icon="pencil" />
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                    <br />
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemograman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>11 Likes</Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label
                  image="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                  alt="alt-aja"
                />
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>David added 2 new Image</Feed.Summary>

                  <Feed.Extra images>
                    <a href="/">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"
                        alt="alt-aja"
                      />
                    </a>
                    <a href="/">
                      <img
                        src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"
                        alt="alt-aja"
                      />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />2 Like
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
