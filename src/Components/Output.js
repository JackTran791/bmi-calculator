import React from 'react'

class Output extends React.Component {

  toFeet(n) {
    let realFeet = ((n*0.393700) / 12)
    var feet = Math.floor(realFeet)
    var inches = Math.round((realFeet - feet) * 12)
    return feet + "'" + inches
  }

  toLbs(n) {
    let nearExact = n/0.45359237
    let lbs = Math.floor(nearExact)
    return lbs
  }

  render() {
    let height = this.toFeet(this.props.data.height)
    let weight = this.toLbs(this.props.data.weight)
    let bmi = this.props.data.bmi
    let bmiClass = this.props.data.bmiClass
    return (
      <div className="output">
        <h3>{height}</h3>
        <h3>{weight}</h3>
        <h3>{bmi}</h3>
        <h3 className={(this.props.data.bmiClass === "Obese") ? "danger" : ""}>{bmiClass} {(this.props.data.bmiClass === "Obese") ? <a href='https://someproductsite.com'>What Can I Do?</a> : ""}</h3>
      </div>
    )
  }
}

export default Output
