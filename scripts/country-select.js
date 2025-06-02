document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.querySelector('select[name="country"]');
    const stateSelect = document.querySelector('.states');

    function getState(country) {
        if (country === 'au') {
            return `
                <select name="stateau" required>
                    <option value="" disabled selected>Select State/Territory</option>
                    <option value="nsw">New South Wales</option>
                    <option value="vic">Victoria</option>
                    <option value="qld">Queensland</option>
                    <option value="wa">Western Australia</option>
                    <option value="sa">South Australia</option>
                    <option value="tas">Tasmania</option>
                    <option value="act">Australian Capital Territory</option>
                    <option value="nt">Northern Territory</option>
                </select>
            `;
        }
        if (country === 'us') {
            return `
                <select name="stateus" required>
                    <option value="" disabled selected>Select State</option>
                    <option value="alabama">Alabama</option>
                    <option value="alaska">Alaska</option>
                    <option value="arizona">Arizona</option>
                    <option value="arkansas">Arkansas</option>
                    <option value="california">California</option>
                    <option value="colorado">Colorado</option>
                    <option value="connecticut">Connecticut</option>
                    <option value="delaware">Delaware</option>
                    <option value="florida">Florida</option>
                    <option value="georgia">Georgia</option>
                    <option value="hawaii">Hawaii</option>
                    <option value="idaho">Idaho</option>
                    <option value="illinois">Illinois</option>
                    <option value="indiana">Indiana</option>
                    <option value="iowa">Iowa</option>
                    <option value="kansas">Kansas</option>
                    <option value="kentucky">Kentucky</option>
                    <option value="louisiana">Louisiana</option>
                    <option value="maine">Maine</option>
                    <option value="maryland">Maryland</option>
                    <option value="massachusetts">Massachusetts</option>
                    <option value="michigan">Michigan</option>
                    <option value="minnesota">Minnesota</option>
                    <option value="mississippi">Mississippi</option>
                    <option value="missouri">Missouri</option>
                    <option value="montana">Montana</option>
                    <option value="nebraska">Nebraska</option>
                    <option value="nevada">Nevada</option>
                    <option value="new-hampshire">New Hampshire</option>
                    <option value="new-jersey">New Jersey</option>
                    <option value="new-mexico">New Mexico</option>
                    <option value="new-york">New York</option>
                    <option value="north-carolina">North Carolina</option>
                    <option value="north-dakota">North Dakota</option>
                    <option value="ohio">Ohio</option>
                    <option value="oklahoma">Oklahoma</option>
                    <option value="oregon">Oregon</option>
                    <option value="pennsylvania">Pennsylvania</option>
                    <option value="rhode-island">Rhode Island</option>
                    <option value="south-carolina">South Carolina</option>
                    <option value="south-dakota">South Dakota</option>
                    <option value="tennessee">Tennessee</option>
                    <option value="texas">Texas</option>
                    <option value="utah">Utah</option>
                    <option value="vermont">Vermont</option>
                    <option value="virginia">Virginia</option>
                    <option value="washington">Washington</option>
                    <option value="west-virginia">West Virginia</option>
                    <option value="wisconsin">Wisconsin</option>
                    <option value="wyoming">Wyoming</option>
                </select>
            `;
        }

        if (country === 'jp') {
            return `
                <select name="state" required>
                    <option value="" disabled selected>Select Prefecture</option>
                    <option value="hokkaido">Hokkaido</option>
                    <option value="aomori">Aomori</option>
                    <option value="iwate">Iwate</option>
                    <option value="miyagi">Miyagi</option>
                    <option value="akita">Akita</option>
                    <option value="yamagata">Yamagata</option>
                    <option value="fukushima">Fukushima</option>
                    <option value="ibaraki">Ibaraki</option>
                    <option value="tochigi">Tochigi</option>
                    <option value="gunma">Gunma</option>
                    <option value="saitama">Saitama</option>
                    <option value="chiba">Chiba</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="kanagawa">Kanagawa</option>
                    <option value="niigata">Niigata</option>
                    <option value="toyama">Toyama</option>
                    <option value="ishikawa">Ishikawa</option>
                    <option value="fukui">Fukui</option>
                    <option value="yamanashi">Yamanashi</option>
                    <option value="nagano">Nagano</option>
                    <option value="gifu">Gifu</option>
                    <option value="shizuoka">Shizuoka</option>
                    <option value="aichi">Aichi</option>
                    <option value="mie">Mie</option>
                    <option value="shiga">Shiga</option>
                    <option value="kyoto">Kyoto</option>
                    <option value="osaka">Osaka</option>
                    <option value="hyogo">Hyogo</option>
                    <option value="nara">Nara</option>
                    <option value="wakayama">Wakayama</option>
                    <option value="tottori">Tottori</option>
                    <option value="shimane">Shimane</option>
                    <option value="okayama">Okayama</option>
                    <option value="hiroshima">Hiroshima</option>
                    <option value="yamaguchi">Yamaguchi</option>
                    <option value="tokushima">Tokushima</option>
                    <option value="kagawa">Kagawa</option>
                    <option value="ehime">Ehime</option>
                    <option value="kochi">Kochi</option>
                    <option value="fukuoka">Fukuoka</option>
                    <option value="saga">Saga</option>
                    <option value="nagasaki">Nagasaki</option>
                    <option value="kumamoto">Kumamoto</option>
                    <option value="oita">Oita</option>
                    <option value="miyazaki">Miyazaki</option>
                    <option value="kagoshima">Kagoshima</option>
                    <option value="okinawa">Okinawa</option>
                </select>
            `;
        }
        return '';
    }

    countrySelect.addEventListener('change', function () {
        const country = countrySelect.value;
        stateSelect.innerHTML = getState(country);
    });

    // Optionally, clear on page load
    stateSelect.innerHTML = '';
});