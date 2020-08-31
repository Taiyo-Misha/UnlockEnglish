import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,ScrollView,TouchableOpacity, Dimensions} from 'react-native';
import SearchContact from './SearchContact';
import GroupContact from './GroupContact';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scaleSizeScreen} from '../../common/scaleSizeScreen'
const { width, height } = Dimensions.get('window');

const listAllContacts=[ {
        avatar:"https://cdn.searchenginejournal.com/wp-content/uploads/2020/05/reverse-image-search-your-complete-guide-5ef5f5435f949-1520x800.png",
        name:'A nhung',
        note:'sinh vien 1',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Ngo Thi Nhung',
        note:'sinh vien 2',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Ngo Thi Nhu',
        note:'sinh vien 3',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Thi Nhung',
        note:'sinh vien 4',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'A nhung',
        note:'sinh vien 1',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Ngo Thi Nhung',
        note:'sinh vien 2',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Ngo Thi Nhu',
        note:'sinh vien 3',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Thi Nhung',
        note:'sinh vien 4',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'A nhung',
        note:'sinh vien 1',
        phoneNumber:'0334762261'
    }, {
        avatar:"",
        name:'Ngo Thi Nhung',
        note:'sinh vien 2',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Ngo Thi Nhu',
        note:'sinh vien 3',
        phoneNumber:'0334762265'
    }, {
        avatar:"",
        name:'Thi Nhung',
        note:'sinh vien 4',
        phoneNumber:'0334762265'
    },
]
export default class Contact extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            listObjectContacts:{}
        }
        this.listAllContacts = listAllContacts;
    }

    handlConvertListContacts2Object(listAllContacts){
        listAllContacts.sort((a,b)=>{
            return a.name.localeCompare(b.name);
        });
        let resolve ={};

        for (const itemContact of listAllContacts) {
            let firstCharName = itemContact.name[0];
            if(resolve[firstCharName]===undefined){
                resolve[firstCharName]=[];
            }
            resolve[firstCharName].push(itemContact);
        }
        this.setState({listObjectContacts:resolve});
    }

    handlSearchContact(valueSearch){
        if(valueSearch===null) return; 
        let res = valueSearch==="" 
                ?this.listAllContacts
                :this.listAllContacts.filter(item => 
                                        item.name.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1 
                                    ||  item.note.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1 
                                    ||  item.phoneNumber.indexOf(valueSearch) > -1);
        this.handlConvertListContacts2Object(res);
    }

    componentDidMount(){
        this.handlConvertListContacts2Object(this.listAllContacts);
    }

    hrefScrren(nameScreen){
        this.props.navigation.navigate(nameScreen)
    }

    render(){
        return(
            <SafeAreaView style={stylesContact.container}>
                <View style={stylesContact.pageBar}>
                    <TouchableOpacity 
                        style={stylesContact.backBtn}
                        onPress={this.hrefScrren.bind(this,'Screen_DashBoard')}
                    >
                        <Icon name="angle-left" color='#fff' size={stylesContact.pageBarText.fontSize} />
                    </TouchableOpacity>
                    <Text style={stylesContact.pageBarText}> Danh Bạ </Text>
                </View>

                <SearchContact handlSearchContact={this.handlSearchContact.bind(this)} />
                <ScrollView style={stylesContact.content}>
                {
                    Object.keys(this.state.listObjectContacts).map((key, index)=> {
                        return (
                            <GroupContact key={index} firstChar={key}
                                listContact={this.state.listObjectContacts[key]}
                            />
                        )
                    })
                }
                </ScrollView>
                
            </SafeAreaView>
        );
    }
}

const stylesContact = StyleSheet.create({
    pageBar:{
        backgroundColor:'#3e4a90',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:10,
        marginBottom:scaleSizeScreen(5,height,1)
    },
    backBtn:{
        position: "absolute",
        left: scaleSizeScreen(10,width),
        bottom: scaleSizeScreen(13,height,1)
    },
    pageBarText:{
        fontSize:scaleSizeScreen(20,width),
        color:'#ffffff',
        
    },
    container: {
        backgroundColor:'#f8f8f8'
    },
    content:{
        backgroundColor:'#f8f8f8'
        
    }
});