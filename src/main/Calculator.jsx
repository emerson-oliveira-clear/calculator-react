import React,{Component} from "react";
import './Calculator.css'

import Button from "../components/Button";
import Display from "../components/Display";


export default class Calculator extends Component {
    render() {
        return (

            <div className="calculator">
                <Display value={100}/>
                <Button Label='AC'/>
                <Button Label='/'/>
                <Button Label='7'/>
                <Button Label='8'/>
                <Button Label='9'/>
                <Button Label='*'/>
                <Button Label='4'/>
                <Button Label='5'/>
                <Button Label='6'/>
                <Button Label='-'/>
                <Button Label='1'/>
                <Button Label='2'/>
                <Button Label='3'/>
                <Button Label='+'/>
                <Button Label='0'/>
                <Button Label='.'/>
                <Button Label='='/>
            </div>

        )
    }

}