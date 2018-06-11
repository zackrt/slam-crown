import React, { Component } from 'react';
import SymptomOption from './SymptomOption';

export class SymptomSelector extends Component {
    symptoms =["Headache", "Fatigue", "Fever", "Nausea"];
    toggleSymptom = (symptom) => {
        const activeSymptoms = this.state.activeSymptoms.indexOf(symptom) === -1 ? [...this.state.activeSymptoms, symptom] : this.state.activeSymptoms.filter(s => s !== symptom)
        this.setState({activeSymptoms})
        this.props.onUpdate(activeSymptoms)
    };
    state = {
        activeSymptoms : []
    }
  render() {
    return (
        <div className="symptoms-btn-group">
            <div className="symptomselector" >
                {this.symptoms.map(symptom => <SymptomOption 
                key={symptom}
                name={symptom} 
                selected={this.state.activeSymptoms.indexOf(symptom) !== -1}
                onClick={ () => this.toggleSymptom(symptom)}
                />)}
            </div>
        </div> 
    )
  }
}
export default SymptomSelector