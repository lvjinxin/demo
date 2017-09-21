
var React = require("react");
var ReactDOM = require("react-dom");
require("./scss/app.scss");
var TodoList = React.createClass({
	deleteItem(event){
		var index = event.target.getAttribute("data-index");
		var item = event.target.getAttribute("data-item");
		
		
        if(item ==1){
        	var key1 = localStorage.getItem("key");
        	 var data1 = key1?key1.split(","):'';
        	 data1.splice(index,1);
        	 localStorage.setItem("key",data1);
        	 window.location.href='';
        }else if(item ==2){
        	var key2 = localStorage.getItem("key2");
        	var data2 = key2?key2.split(","):'';
        	 data2.splice(index,1);
        	 localStorage.setItem("key2",data2);
        	 window.location.href='';
        }else if(item ==3){
        	var key3 = localStorage.getItem("key3");
        	 var data3 = key3?key3.split(","):'';
        	 data3.splice(index,1);
        	 localStorage.setItem("key3",data3);
        	 window.location.href='';
        }
		
	},
	editItem(event){
		var index = event.target.getAttribute("data-index");
		var item = event.target.getAttribute("data-item");
	    if(item ==1){
	    	var key1 = localStorage.getItem("key");
        	var data1 = key1?key1.split(","):'';
        	var name = prompt(data1[index]);
        	if(name && name!==data1[index]){
        		data1[index] = name;
        	    data1 = data1.join(',');
        	    localStorage.setItem("key",data1);
        	    window.location.href='';
        	}
	    }else if(item ==2){
	    	var key2 = localStorage.getItem("key2");
        	var data2 = key2?key2.split(","):'';
        	var name = prompt(data2[index]);
        	if(name && name!==data2[index]){
        		data2[index] = name;
        	    data2 = data2.join(',');
        	    localStorage.setItem("key2",data2);
        	    window.location.href='';
        	}
	    }else if(item==3){
	    	var key3 = localStorage.getItem("key3");
        	var data3 = key3?key3.split(","):'';
        	var name = prompt(data3[index]);
        	if(name && name!==data3[index]){
        		data3[index] = name;
        	    data3 = data3.join(',');
        	    localStorage.setItem("key3",data3);
        	    window.location.href='';
        	}
	    }
	},
	
	render(){

		
		var arr = [];
		var brr = [];
		var crr = [];
        var key1 = localStorage.getItem("key");
        var key2 = localStorage.getItem("key2");
        var key3 = localStorage.getItem("key3");
        var data1 = key1?key1.split(","):'';
        var data2 = key2?key2.split(","):'';
        var data3 = key3?key3.split(","):'';
        var len = data1.length;
        var len2 = data2.length;
        var len3 = data3.length;
      
         
		for(var i = 0; i < len; i++ ){
			if(data1[i]){
				arr.push(<li key={i}><span className='mycontent'>{data1[i]}</span>
			<button className='edit' data-index={i} data-item='1' onClick = {this.editItem}>编辑</button>
			<button className='delete' data-index={i} data-item='1' onClick = {this.deleteItem}>删除</button></li>)
			}
			
		}
          for(var i = 0; i < len2; i++ ){
          	if(data2[i]){
          		brr.push(<li key={i}><span className='mycontent'>{data2[i]}</span>
          	<button className='edit' data-index={i} data-item='2' onClick = {this.editItem}>编辑</button>
			<button className='delete' data-index={i} data-item='2' onClick = {this.deleteItem}>删除</button></li>)
          	}
			
		}
          for(var i = 0; i < len3; i++ ){
          	if(data3[i]){
          		crr.push(<li key={i}><span className='mycontent'>{data3[i]}</span>	
          	<button className='edit' data-index={i} data-item='3' onClick = {this.editItem}>编辑</button>
			<button className='delete' data-index={i} data-item='3' onClick = {this.deleteItem}>删除</button></li>)
          	}
			
		}
		return (
			
			<ul className='mylist'>
			<p className='first'>第一类</p>
			{arr}
			<p className='second'>第二类</p>
			{brr}
			<p className='third'>第三类</p>
			{crr}
			</ul>
			
		)
	}
})
var TodoAPP = React.createClass({
	getInitialState(){
		return {
			list : []
			
		}
	},
	deleteFn(index){
		
	},
	saveData(){
		var username = this.refs.username.value;
		var arr = this.state.list;
		var item = this.refs.item.value;
		arr.push(username);
		var key1 = localStorage.getItem("key")?localStorage.getItem("key"):'';
		var key2 = localStorage.getItem("key2")?localStorage.getItem("key2"):'';
		var key3 = localStorage.getItem("key3")?localStorage.getItem("key3"):'';
		 key1 = key1 +","+arr;
		 key2 = key2 +","+arr;
		 key3 = key3 +","+arr;
		 if(item == 1){
		 	localStorage.setItem("key",key1);
		 }else if(item == 2){
		 	localStorage.setItem("key2",key2);
		 }else if(item ==3){
		 	localStorage.setItem("key3",key3);
		 }
		 window.location.href="";
		this.setState({
			list:arr
		})
	},
	render(){
		return (
			<div className='content'>
			<select ref = "item" className='select'>
			<option value="1">第一类</option>
			<option value="2">第二类</option>
			<option value="3">第三类</option>
			</select>
				<input type = "text" ref = "username" className='inputinfo'/>
				<input type = "button" onClick={this.saveData} value = "添加"/>
				<hr/>
				<TodoList data = {this.state.list} delete = {this.deleteFn}/>
			</div>
		)
	}
})

ReactDOM.render(<TodoAPP />,document.getElementById("app"))
