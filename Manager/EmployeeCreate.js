import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from './Actions';
import { Card, CardSection, Button, Input } from './Components';

class EmployeeCreate extends Component {
  updateName(name) {
    this.props.employeeUpdate({ prop: 'name', value: name });
  }

  updatePhone(number) {
    this.props.employeeUpdate({ prop: 'phone', value: number });
  }

  render() {
    return(
      <View style={{flex: 1, marginTop: 64}}>
        <Card>
          <CardSection>
            <Input
              label="Name"
              defaultText="Lloyd"
              value={this.props.name}
              onChangeText={this.updateName.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Phone"
              defaultText="555-555-5555"
              value={this.props.phone}
              onChangeText={this.updatePhone.bind(this)}
             />
          </CardSection>

          <CardSection>
            <Button title="create" />
          </CardSection>

        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
