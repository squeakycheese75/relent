import React from 'react';
import SubscribeList from './SubscribeList';
import TickerSearch from './components/TickerSearch';
import PreferencesForm from './components/PreferencesForm';
import TickerSearchResults from './components/TickerSearchResults';

class ManagePage extends React.Component{

    addTicker = (event) => {
        //console.log("In ManagePage.addNewTicker with ", event);
        this.props.addNewTicker(event)
    }


    removeTicker = (event) => {
        //console.log("In ManagePage.removeTicker with ", event);
        this.props.removeTicker(event)
    }

    filteredTickers = (event) => {
        //console.log("In ManagePage.removeTicker with ", event);
        this.props.filteredTickers(event)
    }

    render(){
        const exchanges = this.props.exchanges;
        let activeComponent = null;

        if (this.props.filteredTickersData && this.props.filteredTickersData.length) {
             activeComponent = <TickerSearchResults   onSubmit={this.addTicker} data={this.props.filteredTickersData}/>
        }
            
        return(
            <div className="container-fluid">
            <SubscribeList data={this.props.data} onSubmit={this.removeTicker}/>
            {/* <SearchForm onSubmit={this.addNewTicker}/> */}
            <TickerSearch exchanges={exchanges} filterExchanges={this.filteredTickers}/>
            {activeComponent} 
            <PreferencesForm />
          </div>
        );
    };
}

export default ManagePage;