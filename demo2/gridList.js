'use strict';

var React = require('react-native');

var Dimensions = require('Dimensions');
var {
  width, 
  height
} = Dimensions.get('window');

var {
  Image,
  ListView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} = React;

var MockData = [
{
  "nowPrice": "68.00",
  "title": "字母贴花蕾丝镂空连衣裙两件套",
  "cfav": 13896,
  "img": "http://s17.mogucdn.com/b7/pic/150425/1evair_ieytcolgmy2tgnddgazdambqmeyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "38.85",
  "title": "松紧腰9分西装哈伦裤",
  "cfav": 79098,
  "img": "http://s18.mogucdn.com/b7/pic/150416/18ilnj_ieywknldgq2tgnjzgazdambqmeyde_936x1404.jpg_320x999.jpg",
  "width": 320,
  "height": 680
},
{
  "nowPrice": "45.15",
  "title": "时尚荷叶边A摆两件套装",
  "cfav": 9661,
  "img": "http://s17.mogucdn.com/b7/pic/150619/12hykb_ie2wcolega3wimtfgezdambqhayde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 280
},
{
  "nowPrice": "108.50",
  "title": "邵夫人2穿迷彩三叶草V领T恤裙",
  "cfav": 122,
  "img": "http://s21.mogucdn.com/b7/pic/150626/12dtoj_iezgkn3dmuywgnzqgizdambqmmyde_680x1020.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "38.01",
  "title": "少女系甜美清新两件套雪纺娃娃衫",
  "cfav": 10046,
  "img": "http://s18.mogucdn.com/b7/pic/150620/16fq2q_ie2timdgg4ywiodfgezdambqhayde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "59.50",
  "title": "▲夏季新品  百搭蕾丝开衫",
  "cfav": 2568,
  "img": "http://s18.mogucdn.com/b7/pic/150609/12hykb_iezweyldmrsgezdbgezdambqgyyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "59.50",
  "title": "清新甜美水墨印花雪纺连衣裙",
  "cfav": 459,
  "img": "http://s21.mogucdn.com/b7/pic/150628/11tbjd_ie2wgntcg5qwmzrqgizdambqhayde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "49.70",
  "title": "【KAMI甜蜜爱】3M反光情侣T恤",
  "cfav": 29,
  "img": "http://s8.mogucdn.com/p1/150628/14dhcd_ieywcmjtha2damrrgizdambqmeyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "59.85",
  "title": "【小V家】纯色甜美露肩连衣裙",
  "cfav": 1337,
  "img": "http://s18.mogucdn.com/b7/pic/150608/1n09nx_iezgkzbugizdkylbgezdambqmmyde_1000x1500.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "59.50",
  "title": "【KAMI甜蜜爱】复古情侣衬衫",
  "cfav": 5935,
  "img": "http://s18.mogucdn.com/b7/pic/150523/pufv3_ie2wen3dhe4wenjvgezdambqhayde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "66.67",
  "title": "邵夫人朋克风大破洞牛仔9分裤",
  "cfav": 1023,
  "img": "http://s20.mogucdn.com/b7/pic/150603/12dtoj_iezdoy3ghe4gcyzygezdambqmmyde_1200x1800.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "65.80",
  "title": "【森林小红帽】夏季细条纹九分裤",
  "cfav": 29538,
  "img": "http://s17.mogucdn.com/b7/pic/150328/nyyqg_iezginrshfrwmnjtgazdambqmmyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "39.50",
  "title": "韩国时尚 抽绳压皱雪纺哈伦裤",
  "cfav": 446,
  "img": "http://s17.mogucdn.com/b7/pic/150614/1fra9s_ie2tmyzugqydmoddgezdambqhayde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "82.60",
  "title": "【自由人】小香风波点套装背带裙",
  "cfav": 4704,
  "img": "http://s18.mogucdn.com/b7/pic/150529/clr96_ieztqylbgnrtqnjxgezdambqgyyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "156.00",
  "title": "DIY清洁神器美容剂打泡器",
  "cfav": 1965,
  "img": "http://s8.mogucdn.com/p1/150630/14dhcd_ie2tiylegi3wgojrgizdambqhayde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "156.00",
  "title": "清洁神器美容剂打泡器",
  "cfav": 1965,
  "img": "http://s18.mogucdn.com/b7/pic/150514/1lpbvr_ieztknrumy4weobsgezdambqgyyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "156.00",
  "title": "清洁神器美容剂打泡器",
  "cfav": 1965,
  "img": "http://s17.mogucdn.com/b7/pic/150612/1o3pe2_iezwmmlbgmydkzlcgezdambqgyyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
},
{
  "nowPrice": "86.00",
  "title": "清洁神器美容剂打泡器",
  "cfav": 1965,
  "img": "http://s18.mogucdn.com/b7/pic/150609/1o3pe2_ie2dazrxgu2tkzdbgezdambqgiyde_640x960.jpg_320x999.jpg",
  "width": 320,
  "height": 480
}];

var ajaxUrl = "http://www.mogujie.com/act/mce/get_wall";


var GridList = React.createClass({

  /**
  * Props Validation
  * @type {Object}
  */
  propTypes: {
    ajaxUrl                          : React.PropTypes.string,
    cateId                            : React.PropTypes.string,
    style                            : View.propTypes.style,
    column                           : React.PropTypes.number,
    itemWidth                        : React.PropTypes.number,
    itemHeight                       : React.PropTypes.number
  },

  getInitialState() {
    let props = this.props
    let column = props.column || 2
    let cw = props.itemWidth
    let ch = props.itemHeight

    if(!props.itemWidth){
      cw = (width-(column+1)*10)/column;
    }

    if(!props.itemHeight){
      ch = cw*215/145;
    }

    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
      itemWidth: cw,
      itemHeight: ch,
      column: column
    };
  },

  componentDidMount() {
    this.fetchData(this.props.cateId);
  },

  componentWillReceiveProps(nextProps) {
    //loading state
    this.setState({
        loaded : false
    })

    this.fetchData(nextProps.cateId);
  },


  fetchData(cateId) {
    //var cateId = this.state.cateId
    if(!ajaxUrl) {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(MockData),
          loaded: true
      });
    }else{
      var apiUrl = cateId ? ajaxUrl + '?mceId=' + cateId : ajaxUrl;
   
      fetch(apiUrl)
          .then((response) => response.json())
          .then((responseData) => {

              this.setState({
                  dataSource: this.state.dataSource.cloneWithRows(responseData.result.list),
                  loaded: true
              });
        })
        .done();
    }
  },


  render() {
    let state = this.state
    let props = this.props

    var style = state.column>1 ? styles.column : {padding: 5};

    if(!state.loaded){
      return(
        <ActivityIndicatorIOS
          style={[styles.centering, styles.gray, {height: 400,paddingBottom:200}]} />
      );
    };
    return (
      <ListView contentContainerStyle={[style, props.style,{marginTop: -20}]}
        dataSource={state.dataSource}
        scrollEnabled={false}
        renderRow={this._renderRow} />
    );
  },

  _renderRow(item) {
    let state = this.state

    return (
      <TouchableWithoutFeedback key={item.shopId}>
        <View ref='listRow'
          style={[styles.row,{width:state.itemWidth, height:state.itemHeight+45} ]}>
            <Image source={{uri:item.img}}
              style={[styles.img,{ width:state.itemWidth, height:state.itemHeight}]} />
            <View style={styles.goodsInfoBoxView}>
                <Text style={styles.text} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.price}>
                    {'￥'+item.nowPrice}
                </Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

var styles = StyleSheet.create({
  column: {
    paddingTop:5,
    paddingBottom: 25,
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    margin: 5,
    backgroundColor: '#f6f6f6',
    borderColor: '#ccc',
    overflow: 'hidden'
  },

  text: {
    flex: 1,
    marginTop: 2,
    fontSize: 12,
    padding: 3,
    color: '#666',
    paddingLeft: 5,
    paddingBottom: 0
  },

  price: {
    flex: 1,
    marginTop: 5,
    color: '#ee4566',
    fontSize: 14,
    paddingLeft: 3
  },

  centering: {
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

module.exports = GridList;