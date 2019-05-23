import React, { Component } from 'react';
import { Container, Thumbnail, Content } from 'native-base';
export default class HeaderComponent extends Component {
  render() {
    const uri = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
    return (
      <Container >
        <Content  >
          <Thumbnail large square source={{ uri: uri }} />

        </Content>
      </Container>
    );
  }
}
