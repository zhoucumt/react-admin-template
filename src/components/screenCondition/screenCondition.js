/**
 *
 * title: screenCondition.js
 *
 * author: WangPei.
 *
 * date: 2017/5/18.
 *
 */
import React,{Component} from "react"
import ScreenConditionItem from "../../components/screenConditionItem/screenConditionItem"
export default class ScreenCondition extends Component{
    constructor(props){
        super(props);
        this.state={
            screenConditionData:[
                {
                    "screenTypeId": "name",
                    "screenTypeName": "渠道类型",
                    "values": [
                        {
                            "sid": "-1",
                            "sname": "全部"
                        },
                        {
                            "sid": "01",
                            "sname": "线下实体"
                        },
                        {
                            "sid": "02",
                            "sname": "线上电商"
                        },
                        {
                            "sid": "03",
                            "sname": "集客渠道"
                        },
                        {
                            "sid": "04",
                            "sname": "其他"
                        }
                    ]
                },
                {
                    "screenTypeId": "age",
                    "screenTypeName": "合约类型2",
                    "values": [
                        {
                            "sid": "-1",
                            "sname": "全部"
                        },
                        {
                            "sid": "01",
                            "sname": "线下实体2"
                        },
                        {
                            "sid": "02",
                            "sname": "线上电商2"
                        },
                        {
                            "sid": "03",
                            "sname": "集客渠道2"
                        },
                        {
                            "sid": "04",
                            "sname": "其他2"
                        }
                    ]
                }
            ],
            selectedData:[]
 
        }
    }
    screenConditionItemReturn(typeId,returnData){
        //debugger
        var selectedData=this.state.selectedData;
        for(var i=0;i<selectedData.length;i++){
            if(selectedData[i].hasOwnProperty(typeId)){//如果数组中存在这个类型的数据，现将其删除掉，然后在push入新的数据
                selectedData.splice(i,1);
            }
        }
        selectedData.push(returnData);
        this.setState({selectedData:selectedData});
        console.log('selectedData: ', this.state.selectedData)
    }
    render(){
        var queryBtnStyle=null;
        switch (window.screen.width){
            case 1366:
                queryBtnStyle={
                    width:"80px",
                    height:"35px",
                    border:"1px solid #C3B295",
                    cursor:"pointer",
                    borderRadius:"10px",
                    textAlign:"center",
                    lineHeight:"35px",
                    backgroundColor:"#D1C7B0",
                    fontSize:"18px",
                    color:"#ffffff",
                    top: "-37px",
                    left: "1030px",
                    position: "relative"
                }
                break;
            case 1920:
                queryBtnStyle={
                    width:"80px",
                    height:"35px",
                    border:"1px solid #C3B295",
                    cursor:"pointer",
                    borderRadius:"10px",
                    textAlign:"center",
                    lineHeight:"35px",
                    backgroundColor:"#D1C7B0",
                    fontSize:"18px",
                    color:"#ffffff",
                    top: "-37px",
                    left: "1030px",
                    position: "relative"
                }
                break;
        }
        var screenConditionData=this.state.screenConditionData;
        if(screenConditionData.length>0){
            var screenType=screenConditionData.map((data,index)=>{
                return (<ScreenConditionItem key={index} data={data} callbackParent={this.screenConditionItemReturn.bind(this)}/>);
            })
        }
        return(
            <div>
                {screenType}
                <div style={queryBtnStyle}>查询</div>
            </div>
        );
    }
}