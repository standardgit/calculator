import React from 'react';
import {  Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class App extends React.Component {
  constructor() {
    super()
    this.state={
      resultText: "",
      calculationText: ""
    }
    this.operations = ['DEL', '+','-','*','/', ]
  }

    calculateResult = () => {
      const text = this.state.calculationText
      console.log(text, eval(text))

      this.setState ({
        resultText: eval(text)
      })
      //pass the text
    }
      validate() {
        const text = this.state.calculationText
        switch(text.slice(-1)) {
          case '+' :
          case '-' :
          case '*' :
          case '/' :
           return false
        } return true
      }
  buttonPressed(text) {
    //console.log(text)
    if (text == '=') {
      return this.validate() && this.calculateResult()
    }

      if (text == '=') {
       return this.calculateResult(this.state.resultText)
      }
    this.setState({
      calculationText: this.state.calculationText+ text
    })
  }

    operate(operations) {
      switch(operations) {
        case 'DEL' :
          console.log(this.state.calculationText)
          let text= this.state.calculationText.split('')
          text.pop()
          this.setState({
            calculationText:''
          })
        break
        case '+' :
        case '-' : 
        case '*' : 
        case '/' : 

              const lastchar = this.state.calculationText.split('').pop()
                if(this.operations.indexOf(lastchar) > 0) return
          if(this.state.text == "")
            return 
            this.setState({
              calculationText: this.state.calculationText + operations
            }) 
      }
    }

  render() {
    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity key={`${i}_${j}`} onPress={()=> this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)

      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

     
      let ops=[]
      for (let i = 0; i < 5; i++) {
        ops.push(<TouchableOpacity key={i}  style={styles.btn} onPress={() => this.operate(this.operations[i])}>
          <Text style={[styles.btntext, styles.white]}>{this.operations[i]}</Text>
        </TouchableOpacity>)
      }
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculations}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View> 
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }   
}