import React from 'react';
import { Header, Image, Table } from 'semantic-ui-react';

const TableExampleCollapsing = () => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/lena.png' rounded avatar={true} size='mini' />
            <Header.Content>
                Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            22
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/media/avatars/3/1/7fe8b099749d32b8eea573565842d5/resized/72/2d63293e8abe6cf73dd3631af2e61bb0.png' rounded size='mini' />
            <Header.Content>
                Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            15
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/media/avatars/3/1/7fe8b099749d32b8eea573565842d5/resized/72/2d63293e8abe6cf73dd3631af2e61bb0.png' rounded size='mini' />
            <Header.Content>
                Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            12
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/media/avatars/3/1/7fe8b099749d32b8eea573565842d5/resized/72/2d63293e8abe6cf73dd3631af2e61bb0.png' rounded size='mini' />
            <Header.Content>
                Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            11
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleCollapsing
