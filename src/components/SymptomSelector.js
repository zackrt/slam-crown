import React, { Component } from 'react';
import SymptomOption from './SymptomOption';

export class SymptomSelector extends Component {
    symptoms =["Headache", "Fatigue","Fever", "Nausea"];
    toggleSymptom = (symptom) => {
        if (!symptom in this.state.activeSymptoms) {
            this.setState({
                activeSymptoms:[...this.state.activeSymptoms, symptom]
            })
        }
      
        else {
            this.setState({
                activeSymptoms : this.state.activeSymptoms.filter(s => s != symptom)
            })
        }
    };
    state = {
        activeSymptoms : []
    }
  render() {

    return (
        <div className="symptoms-btn-group">
            <div className="symptomselector" >
                {this.symptoms.map(symptom => <SymptomOption 
                name={symptom} 
                selected={true}
                onClick={ () => this.toggleSymptom(symptom)}
                />)}
            </div>
        </div> 
    )
  }
}
export default SymptomSelector