/**
 *
 * title: screenConditionItem.js
 *
 * author: WangPei.
 *
 * date: 2017/5/18.
 *
 */
import React, {Component} from "react"
import "./screenConditionItem.less"
export default class ScreenConditionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*itemData: {
                "screenTypeId": "1",
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
            },*/
            selectedItems: {"name": ["-1"]}  //某一维度类型选中的数据{key:value} key类型id，value选中数据的id的数组
 
        }
        this.onClickScreenItem = this.onClickScreenItem.bind(this);
    }
    componentWillMount(){
        console.log('componentWillMount======');
        if(this.props.data!==null){
            var typeId=this.props.data.screenTypeId;
            console.log('typeId:========/////', typeId);
            var newSelectedItems={};
            newSelectedItems[typeId]=["-1"]
            this.setState({selectedItems:newSelectedItems});
            console.log('////=====componentWillMount selectedItems: ', this.state.selectedItems);
        }
    }
    onClickScreenItem(event) {
        // debugger;
        var clickItem = event.currentTarget;
        console.log('clickItem: ', clickItem);
        var typeId = clickItem.parentNode.id;
        var sId = clickItem.id;
        var selectedItems = this.state.selectedItems;
        var newSelectedItems = {...selectedItems};
        var selectedItemsId = newSelectedItems[typeId] //某一类型下选中的数据的id的数组
        if (sId === "-1" && selectedItemsId.indexOf(sId) === -1) {//当点击的是全部并且数组中没有全部时，则删掉选中的所有数据，并将全部这一项的id放入数组中
            console.log('in all');
            for (var i = selectedItemsId.length-1; i >=0; i--) {
                selectedItemsId.splice(i, 1);
            }
            selectedItemsId.push(sId);
        }
        else if (selectedItemsId.indexOf(sId) === -1) {//如果点击的不是全部，是其他选项时，若数组中有全部这一项，先删除全部这一项，然后将选中的项放入数组中
            console.log('not in all');
            for (var i = 0; i < selectedItemsId.length; i++) {
                if (selectedItemsId[i] === "-1") {
                    selectedItemsId.splice(i, 1);
                }
            }
            console.log('im--------1', selectedItemsId);
            // selectedItemsId = [];
            selectedItemsId.push(sId);

        }
        else { //如果点击的是全部或者别的选项，并且点击的这一项已经存在于数组中，则应该删除掉这一项
            console.log('in--------------');
            selectedItemsId.splice(selectedItemsId.indexOf(sId), 1);
        }
        selectedItemsId = [selectedItemsId[selectedItemsId.length - 1]];
        console.log('selectedItemsId:-------', selectedItemsId);
        this.props.callbackParent(typeId,newSelectedItems);
        this.setState({selectedItems: newSelectedItems});
 
    }
 
    setScreenItemStyle(sid, typeId) {
        console.log('=======sid: ', sid);
        var selectedItems = this.state.selectedItems;
        console.log('selectedItems=========1: ', selectedItems);
        if (selectedItems[typeId].indexOf(sid) !== -1) {
            return "specialReport-screenConditionItem-sName-div-change";
        } else {
            return "specialReport-screenConditionItem-sName-div";
        }
    }
 
    render() {
        var itemData = this.props.data;
        if (itemData !== null && itemData.values.length > 0) {
            var td = itemData.values.map((data, index) => {
                return (
                    <td id={itemData.screenTypeId} key={index} className="specialReport-screenConditionItem-sName">
                        <div className={this.setScreenItemStyle(data.sid, itemData.screenTypeId)}
                             onClick={this.onClickScreenItem}
                             id={data.sid}>{data.sname}</div>
                    </td>
                );
            });
        }
        return (
            <table className="specialReport-screenConditionItem-table">
                <tbody>
                <tr>
                    <td className="specialReport-screenConditionItem-typeName">{itemData.screenTypeName}:</td>
                    {td}
                </tr>
                </tbody>
            </table>
        );
    }
}
