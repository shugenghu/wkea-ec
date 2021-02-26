/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { INavigationMenuViewProps, IMenuItemData } from '@msdyn365-commerce-modules/navigation-menu';
import { uniq } from 'lodash';

interface IcloseTimeOut {
  id: number
  timer: NodeJS.Timeout
}

interface itemIndex {
  id: number
  index: number
}

interface INavigationState {
  activeIds: number[],
  closeTimeOut: IcloseTimeOut[],
  itemIndexs: itemIndex[],
  currentIndex: number
}

/**
 *
 * NavigationMenuView component
 * @extends {React.PureComponent<INavigationMenuViewProps>}
 */
export class NavigationMenuView extends React.PureComponent<INavigationMenuViewProps, INavigationState> {
  constructor(props: INavigationMenuViewProps) {
    super(props);
    this.state = {
      activeIds: [],
      closeTimeOut: [],
      itemIndexs: [],
      currentIndex: 20
    }
  }

  public render(): JSX.Element | null {
    const { menuItemData } = this.props;
    if (!menuItemData) {
      return <div className="wkea-nav-menu"></div>
    }
    return (
      <div className="wkea-index-nav">
        <div className="centre">
          <ul className="clear wkea-index-nav-ul">

            <li className="wkea-index-nav-all">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 13 13">
                <defs>
                  <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 31 29">
                    <image width="31" height="29" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAYAAABSZrcyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAH6ADAAQAAAABAAAAHQAAAAAKR4aWAAABkUlEQVRIDe2Xv0vDQBiGc6JFKIiCiDoqiEIVBwfF0UEQ8e9wENF/wMVBlOrSzV0KgoOLiIOgi6OD0E3EwR/UgoJ0KIrxeY+kHBnlbjIfPL0vl+Z9m+9yd42J43gsiqJDmIYO8BVvCO0aY6RtA68FkgoMwElERw1CxpycMeiDH9dIdzqhkwFjPtEeoTWOT1Pml05HiPQsEa3RaijSKBqVg6MDmASfY95Ar8yYX9DawGucpAz9cGo784+8AnkFQldA87wHkz2YAZ/zvI7eDvP8itYGXqMk+zAIx1pzzyFkaOOSTzc8u0a600WdDBgriXaJdsjxsWv7vdMRIr1JRB8y4kWVowS38AXfHmmgtekacrwMT9CCo/YWx8EwX2wfuxf9Mf/gYWtmr8WnQF8v5/RA5pFX4J9UwE4tHv917ncWfK7tr+jpf/tLWkt8usi3QStdVYtMBUJFHWG9INggv3aNZB461uSMyVTGqKUyf9qfFe7jMZF+z1gUtJ8v0an3Ke3rPiNGrMqYr6aieG2Qb0En3P0CTEaJGlVLjo8AAAAASUVORK5CYII=" />
                  </pattern>
                </defs>
                <rect id="图像_64" data-name="图像 64" width="13" height="13" fill="url(#pattern)" />
              </svg>
              <a href="/">全部商品分类</a>
              <ul className="clearboth">
                {this._getListMenu(menuItemData, 0)}
              </ul>
            </li>
            <li>
              <a className='wkea-index-nav-active-select' href='https://www.wkea.cn/'>首页</a>
            </li>
            <li>
              <a href='https://www.wkea.cn/document'>维嘉品牌</a>
            </li>
            <li><a href="https://www.wkea.cn/document">供应商合作</a></li>
            <li><a href="https://www.wkea.cn/service">售后服务</a></li>
          </ul>
        </div>
      </div>
    );
  }
  private _getListMenu(menu: IMenuItemData[] | undefined, count: number = 0): JSX.Element[] | null {
    if (!menu) {
      return ([

        <div className="wkea-nav-menu-item">
          <a href="javascropt:void(0)" className="nodata">暂无内容</a>
        </div>
      ])
    }
    const result = [];
    count++;
    menu = menu.filter(v => v.id);
    for (let i = 0; i < menu.length; i++) {
      const v = menu[i];
      ((count) => {
        result.push(
          <li className={`${this.state.activeIds.find(n => n === v.id) ? 'wkea-index-nav-active' : ''}`}
            onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
            onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
            <a className="" href={v.linkURL}>
              <div className="clearfix">
                <div className="float-left">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="15.306" viewBox="0 0 15 15.306">
                    <image id="图像_265" data-name="图像 265" width="15" height="15.306" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAyCAYAAAD1CDOyAAAMYWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSSWiBCEgJvYnSCSAlhBZBQKogKiEJJJQYE4KKHV1UcO0iimVFV0VcdHUFZC2IuNZFsffFgoqyigUbKm9CArr6yvfO982dP2fO/Kdk5t4ZAHTa+TJZHqoLQL60QB4fEcIam5rGInUABGBAF2gBP75AIePExUUDKAP9P+XNFWgN5aKLiuv78f8q+kKRQgAAkg5xplAhyIe4CQC8WCCTFwBADIV66ykFMhUWQ2wghwFCPEOFs9V4mQpnqvHWfpvEeC7EDQCQaXy+PBsA7RaoZxUKsiGP9gOIXaVCiRQAHQOIAwVivhDiRIiH5edPUuE5EDtAexnEOyBmZ37Fmf0P/sxBfj4/exCr8+oXcqhEIcvjT/s/S/O/JT9POeDDDjaaWB4Zr8of1vBa7qQoFaZB3CXNjIlV1RridxKhuu4AoFSxMjJJbY+aChRcWD/AhNhVyA+NgtgU4nBpXky0Rp+ZJQnnQQxXCzpVUsBL1MxdKFKEJWg418snxccO4Cw5l6OZW8uX9/tV2bcoc5M4Gv5rYhFvgP91kTgxBWIqABi1UJIcA7E2xAaK3IQotQ1mVSTmxgzYyJXxqvhtIGaLpBEhan4sPUseHq+xl+UrBvLFSsQSXowGVxSIEyPV9cF2Cvj98RtBXCeScpIGeESKsdEDuQhFoWHq3LFWkTRJky92R1YQEq+Z2y3Li9PY42RRXoRKbwWxiaIwQTMXH1kAF6eaH4+WFcQlquPEM3L4o+LU8eCFIBpwQShgASVsmWASyAGS1q76LvhLPRIO+EAOsoEIuGg0AzNS+kek8JkAisDfEImAYnBeSP+oCBRC/adBrfrpArL6Rwv7Z+SChxDngyiQB38r+2dJB70lgwdQI/nOuwDGmgebaux7HQdqojUa5QAvS2fAkhhGDCVGEsOJjrgJHoj749HwGQybO87GfQei/WJPeEhoI9wjXCa0E65PlBTLv4llNGiH/OGajDO/zhi3g5xeeAgeANkhM87ETYAL7gn9cPAg6NkLarmauFW5s/5NnoMZfFVzjR3FlYJShlCCKQ7fztR20vYaZFFV9Ov6qGPNHKwqd3DkW//cr+oshH3Ut5bYQmwfdgI7ip3CDmL1gIUdwRqws9ghFR5cQw/619CAt/j+eHIhj+Q7f3yNT1UlFa41rp2uHzVjoEA0tUC1wbiTZNPkkmxxAYsDvwIiFk8qGD6M5e7q7gaA6puifk29YvZ/KxDm6S+6eQsACKju6+v7/YsuqgOAfc/hNr/9RWefA18H8BtwcrVAKS9U63DVgwDfBjpwRxkDc2ANHGBG7sAb+INgEAZGgViQCFLBBFhnMVzPcjAFzABzQQkoA8vAarAObAJbwA7wC9gL6sFBcBT8Ac6A8+AyuAnXTwd4CrrBG9CLIAgJoSMMxBixQGwRZ8QdYSOBSBgSjcQjqUgGko1IESUyA5mHlCErkHXIZqQa+RU5gBxFTiFtyHXkLtKJvEQ+oBhKQw1QM9QOHYGyUQ4ahSai49FsdDJahM5Hl6AVaBW6C61Dj6Jn0MtoO/oU7cEApoUxMUvMBWNjXCwWS8OyMDk2CyvFyrEqrBZrhP/0Rawd68Le40ScgbNwF7iGI/EkXIBPxmfhi/F1+A68Dm/BL+J38W78M4FOMCU4E/wIPMJYQjZhCqGEUE7YRthPOA53UwfhDZFIZBLtiT5wN6YSc4jTiYuJG4i7iU3ENuJ9Yg+JRDImOZMCSLEkPqmAVEJaS9pFOkK6QOogvSNrkS3I7uRwchpZSi4ml5N3kg+TL5AfkXspuhRbih8lliKkTKMspWylNFLOUToovVQ9qj01gJpIzaHOpVZQa6nHqbeor7S0tKy0fLXGaEm05mhVaO3ROql1V+s9TZ/mROPS0mlK2hLadloT7TrtFZ1Ot6MH09PoBfQl9Gr6Mfod+jtthvZwbZ62UHu2dqV2nfYF7Wc6FB1bHY7OBJ0inXKdfTrndLp0Kbp2ulxdvu4s3UrdA7pXdXv0GHpuerF6+XqL9XbqndJ7rE/St9MP0xfqz9ffon9M/z4DY1gzuAwBYx5jK+M4o8OAaGBvwDPIMSgz+MWg1aDbUN/Q0zDZcKphpeEhw3YmxrRj8ph5zKXMvcwrzA9DzIZwhoiGLBpSO+TCkLdGQ42CjURGpUa7jS4bfTBmGYcZ5xovN643vm2CmziZjDGZYrLR5LhJ11CDof5DBUNLh+4desMUNXUyjTedbrrF9Kxpj5m5WYSZzGyt2TGzLnOmebB5jvkq88PmnRYMi0ALicUqiyMWT1iGLA4rj1XBamF1W5paRloqLTdbtlr2WtlbJVkVW+22um1NtWZbZ1mvsm627raxsBltM8OmxuaGLcWWbSu2XWN7wvatnb1dit0Cu3q7x/ZG9jz7Ivsa+1sOdIcgh8kOVQ6XHImObMdcxw2O551QJy8nsVOl0zln1NnbWeK8wbltGGGY7zDpsKphV11oLhyXQpcal7vDmcOjhxcPrx/+bITNiLQRy0ecGPHZ1cs1z3Wr6003fbdRbsVujW4v3Z3cBe6V7pc86B7hHrM9GjxeeDp7ijw3el7zYniN9lrg1ez1ydvHW+5d693pY+OT4bPe5yrbgB3HXsw+6UvwDfGd7XvQ972ft1+B316/5/4u/rn+O/0fj7QfKRq5deT9AKsAfsDmgPZAVmBG4E+B7UGWQfygqqB7wdbBwuBtwY84jpwczi7OsxDXEHnI/pC3XD/uTG5TKBYaEVoa2hqmH5YUti7sTrhVeHZ4TXh3hFfE9IimSEJkVOTyyKs8M56AV83rHuUzauaolihaVELUuqh70U7R8ujG0ejoUaNXjr4VYxsjjamPBbG82JWxt+Ps4ybH/T6GOCZuTOWYh/Fu8TPiTyQwEiYm7Ex4kxiSuDTxZpJDkjKpOVknOT25OvltSmjKipT2sSPGzhx7JtUkVZLakEZKS07bltYzLmzc6nEd6V7pJelXxtuPnzr+1ASTCXkTDk3UmcifuC+DkJGSsTPjIz+WX8XvyeRlrs/sFnAFawRPhcHCVcJOUYBohehRVkDWiqzH2QHZK7M7xUHicnGXhCtZJ3mRE5mzKedtbmzu9ty+vJS83fnk/Iz8A1J9aa60ZZL5pKmT2mTOshJZ+2S/yasnd8uj5NsUiGK8oqHAAB7ezyodlD8o7xYGFlYWvpuSPGXfVL2p0qlnpzlNWzTtUVF40c/T8emC6c0zLGfMnXF3Jmfm5lnIrMxZzbOtZ8+f3TEnYs6OudS5uXP/LHYtXlH8el7KvMb5ZvPnzL//Q8QPNSXaJfKSqwv8F2xaiC+ULGxd5LFo7aLPpcLS02WuZeVlHxcLFp/+0e3Hih/7lmQtaV3qvXTjMuIy6bIry4OW71iht6Joxf2Vo1fWrWKtKl31evXE1afKPcs3raGuUa5pr4iuaFhrs3bZ2o/rxOsuV4ZU7l5vun7R+rcbhBsubAzeWLvJbFPZpg8/SX66tjlic12VXVX5FuKWwi0PtyZvPfEz++fqbSbbyrZ92i7d3r4jfkdLtU919U7TnUtr0BplTeeu9F3nfwn9paHWpXbzbubusj1gj3LPk18zfr2yN2pv8z72vtrfbH9bv5+xv7QOqZtW110vrm9vSG1oOzDqQHOjf+P+34f/vv2g5cHKQ4aHlh6mHp5/uO9I0ZGeJllT19Hso/ebJzbfPDb22KWWMS2tx6OOn/wj/I9jJzgnjpwMOHnwlN+pA6fZp+vPeJ+pO+t1dv+fXn/ub/VurTvnc67hvO/5xraRbYcvBF04ejH04h+XeJfOXI653HYl6cq1q+lX268Jrz2+nnf9xY3CG70359wi3Cq9rXu7/I7pnaq/HP/a3e7dfuhu6N2z9xLu3bwvuP/0geLBx475D+kPyx9ZPKp+7P74YGd45/kn4550PJU97e0q+Vvv7/XPHJ799jz4+dnusd0dL+Qv+l4ufmX8avtrz9fNPXE9d97kv+l9W/rO+N2O9+z3Jz6kfHjUO+Uj6WPFJ8dPjZ+jPt/qy+/rk/Hl/P6jAAYbmpUFwMvtANBTAWCch+eHceo7X78g6ntqPwL/Cavvhf3iDUAt7FTHdW4TAHtgswuG3HMAUB3VE4MB6uEx2DSiyPJwV3PR4I2H8K6v75UZAKRGAD7J+/p6N/T1fYJ3VOw6AE2T1XdNlRDh3eAnVxW6YLEPfCvqe+hXOX7bA1UEnuDb/l9vWomOcylcEwAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMaADAAQAAAABAAAAMgAAAAAFmdYVAAAOIUlEQVRoBc1ZCXjUxRWf+W82yQaSgFC1BJSrWupRWw/aiiIiXnxS1JKKFBFyye1uTtRPV62Qe0EqmmQhivQQq7VY6lFqPUD0a73PTw0oEqhFjNnEbJLd/0x/b/Y/yz+bzSZBe7zvm515b97Mf97Mu2aWs/8D8Hq3Jh8+pjtVtJtOWo7TJcxhrUM6vN7s7oEsjw+E6T/FU1TVME4Idifmn4WShGKg0JoESohz9qzBhLuqpKAJeJ/wPxHCU+Gfzphcj1V9B4UWnwhMyaXXV5L/y76Yek3grvAv4JCeSf58Rmezx+v1hvsaPFg65kpqc2Wtl0zmYKxSHWuOPaDt4ozvAx7Ezk6QjM1DOxnFATzd4otb9TgJT6V/EZOyDpxauE+l5EszO/dvxwLoiI8a8r11aUNcfCsWejkmoe924rdRSLZ+bWnee3riG32Nw4xQeAeT7EyL9lBtad41uj9eHRXCXdGQA+Q+MJEAZFC0Cxoe5g5eXFOU+4kmDKaOnMDoddjtJda4fYLLn64tyX/dPk9peV1miBsvgHYa0bGerTWleT+388RrKyE8FfUwLP4oGBwo7SBeheM8F+1ilDQUgiDjfFlGR8aWgXqNyDDG3BX1N+AE7rXwz7lDTKopKvhc91O9xHvP0BRX8nv49mjCYdSP15TkkcH3C9xd6z+Gh+QBcKagmILzqWtLcnfRSHdtrcsIpb8GgcgAyXMQfCCSkyavdS/8MoIm/rV2dz+4hqK0G0bK8dXF131lH0UCuFzJH+M7I4iO+lFfad7Vdp7Y9pytWx0PZ2ebRMfCAkHUIc0EG4jukM/jCdaU5E4yBJuBfv3hk4zu8FOav786ZPBbwEMCYHF8WawAJCSdgBYAXI/tH5eZnWhed7n/2jF7W1vclf5bic+ghUrOyNhIKkcSF1XUEQXOZfWqvGcMIzweH6IdxXekWlSUJ0GDS36F1d3kK8nZbGelEyAb0CoEJdqWEXTO1Tts59VtT2X99VjSJuDpXEo30ZWK+EryyJiUCknJZhZWNsylTjtUFy/+Fz7Waaf11/aUb/w+BD+J+KSU26DoQI9ASlrKFGDKiFF3hFwd2V7vwj6/gXXlw/VvAC+pPkHGyoqNJ2s9Z2aY0RGSKhlQqdVeb2MqccUFzrULjtt9hChokZAdLs+Q9xyhR1pdHV070Y2iwJUUTH2ETsfCe1SeyobrsMF3g+hC0aptOJi5ICrEupvzPkMnMQHk2FZXeF2k3eP3oIVNhEcrheuMju/BZSFQ09OtZke81GGDdykMPUQG/DYKHBKfCQPfSDHFGqeqwoqGGTCoBiB0AgiGsgC1lVfxWWqXFKf146loeBNNOuIuzBs1YPj4xyQXbxjS+Cv6hhE7aIszgwfq+wqEOP5t2D2yiX8iYH2bxsQDy4O9i75Rqp+z32R0JOWQauEELseHtlvjuqQh5/qK8/+AddKmH4vS0msnweSxBkBqCT8dKZB2kyH5Qug2qYgC8v2tqaNIDeMCBHDG7YghVpQVtIZcwfEgk6ek3bk2kGpu8VRsnGYTAOYgLyEBFM+RrGJILyHAtANWf4fFGFPxJdzgSw2Da2OEDvAtCGY6Evfgx0kdsggjKGr36IxB1q9Y0ZXEjONA/kR1cXkVktknNBuX4jwkgc8RXlS1eQiq4Vbfq72EoI6asvzbQi5XJoLacFVEeBzIn6IY2Jl8IUQBEqnvAaedQ4LG1yJxXIZ2LLxkEZztKVnRE4xl0nhlaU4bXPk5wD9AweErG+jCCVxQU1agHQAicvcpVj/Dhj8dVwgwsPUrfhGgqKzKqsUfY/cpluxDQWrCFxuML5DcmA28HcUJY6tG/rUQ7SjIsKSjDxNBOphW02h/vAa5cikcl6GPjP0rZQPWCWh+OOrzrbYIm3wDSTtgcJfXnwL1eRoDIgbI2K3Qp/cRBDaClo5CmWlBbUneZj0pDHA32j9CaYG6nEi7rfsS1eShMoaIoSSUnY9cf8AVfgM0ij9fwGGM6PMk7AN121eW/w7U6CLgWtfv4IKNg7HngkaqlQp18yuPYg1CdKu3msPDzNwMgQe0cfXego5YAWietrQwnagKoDjfOqINSggaQLm/FPwnaNKiyWNUGMwYS7YClFTHSR5FeRYgyVJQdmztPr+4qPrBNOBHBSoDkOyWyGD+cW1p/k3UHrQQNMi3KvejzmA3+eioIDDuUdjiudQfAfEMBSnkRnuAk6oRtA39ak9XpDm436Kqe49lXFBqRBGb0pgb9QxHJQQNpmjLHY6z0FS7jBO5E64iC4LM0ZNDlf6M9jEWvgtp+AS4WmXo7vK60/qL+Goc1I+yViGSmoCTayW3VeMry/uj6o/gunl0NQyXjPYJFIrinfhmDnbsUpzMfD0j2UVmMHO5vkzhhOiOcgb690D4RiHk5nVlBfs0P9WF1XUjmeDz1HxHkkTq8rYPE6vrCwqi14cBGRmNTASF5XVT4G7/BJ5MFErO1I7RGCSuK2pK8tdTe/ndd6c4g66/oHke4TZAcGfNWAw8EZyx5COx3ceh3x4gD2Fj8mtKcx+zjVPNb0QImon0Hwt5HE1K0gg6MPl83JHJsFl+XZ1zaIujHip3PeFYJFyz0u8TFd73z0HwPmrwlNLYC5UeYpdU0wZdL1+96Vu4U92OgVqAQ7CXC2qKFr1Lk5HuB740booKwNgBU4hLhnce3I8nnOmQaDZSFLKvNGyEgPDtaO9FoLuf0iCaIxF8bSHcazaN54a5Ex/XWWoTAtBE+0cDqVkFwL0WTTq4eUGyEG2trlHbsOBLoUJ7EX9m2Z9u7OP7ax+1d6KJi6r8p0KAN9FUAiAd2AGjm2T/aGGFfz7UQdmEppvS8Xq34cTLBp8JGtIYNhELeYM2RPMMpj5qITzl9XnwKq/gY8qI4UXWpXc2X2b3GvRcCTWpAw8ttJvuH6hxaOoZiAw3YhuqgfzLMN8pXFN/dgQd+C9Oc3AA/U4KuEZXYC32hG5lbUnuenJFejZLzV4GPpJo+NBhRKh50mBXwvuQemEKfn9G5/6cQNroq9G3VdEYa5XMuMhXmvMPC++3GpQQdP9NdSVTLjTXmrkDq5uDhI+CWhTK1mwYDnV5BwRtJ+TT6YIUxLvWDEOKKRxW253WsY7uETSQXjEglB9NOrUvINQVtWX5L1JffzBgIVaW153g4MZvMSHlTQSHHFz8OPbuXFKxMT3MxIfoV+pCasa5OIizKFejIEhGMHOYDnwWTVWFlX430gniS6aTk9KYXluWQxlrQhiQTZBqQIAXMJMW4K2MYPOoWAHoxRACPAe+iL4z9iQeo4sgwDRrFRKvATviCUD9eKjzoVqNEoZejkDkf3LlXQ16LmKJC/2eBOU4nBuk2y4UbCz7G96ppsfOpmKBa9QjWPBsq68pI5h0amuaOB9Xy6cs2i4Ifz544VH7Bnd5w10QtgwctMmfY54xid6jEp6Ep7xhMQR4DRORAJBArs3saJ5B7VhALFhrE6AdWe4Z6sNSarvAPdZc2J8ANC+Su5txEiQEwUhcglroRSSC9v6NKwTtKtKIahjtBgwhQ8P6eE5m54GieIvA0wyiMdN37NZkETqBslwaZpgmnaLKXBEfXvLUbBpD9P4A77G10L3bLL7Ubm683Zdq9VInekkwRedDViCiOTox2ZW+ktwn432YHghwv65FH3mfHumG5qeYgk0gr0bHGXAY4qyqkhvI+BMCvXyfsCfgRaZ7i8X4Af4nuTj2f5IeQlh/BP4OA85RgyQyyyR+buwg/eWicv9M/Fnye+CpKG1wn5fpvwU0j67xiFCMj1USjvowN9iF1cV5FO0TAgkyZm/gLkhfDEa8T7D3Ke+yp+5RIQqr/SdKkz0L5rFqVs5eQeY4ta/M0b3GP5EbktwfXTdDOLkcpMkPqrHxfuASIEgNHhpWopuefppxIlNjPVy8oUTD29ZmfGMejcVUL8PrTYFqKzWN2oQw5U5LAIq6H2HAr4XoottXrySRBIYApA4kAO4C3JNQADBRNMcfJ4VoNaII7GgWbGRHcWXj8dTdH/hK868DD7wfQiKXkxHlCVeghLix0n8ujmS0RSMhJsITkZ7vDqRlvUiGbvXhYrMlQ5ryPY1jdTf7SnN/dQRP0MLXkeHmwn1uj3DJsaYM77TPn2A0w9hs9H+peIQ8Q/OqxeF8lmsC6uiCFU2ys5ErTaM2/fPvDAZ3oalcLgR/4NNxGUrPFe8Af9I7mmfTWIt9QsCV1a+REy+uwtCWyPMlksloSqIWDMJQa0JdhYRh6OhMmjCZOgKuVrqcn0ptLGJ3erA5N9G/OsQXD7DzgsZCETdZ/eOxwA9pk+LxEw1/JTyDSq0J6vsE3P1WzYu10NWyfh46tmgi1dCp/ehUKoZc7SpuGrP0zQz015Ei/JCks48ZbJte89pcZiM28Ro1Fs4k2QzNKF+1pEXPZd3LyWH8DAWayHZ3mslX3HPTgsOaR53EvnHDyK1+oYlUawHQbMIr34VaAAj7YbfLNfXrCkDfoIgunIFF2Aly07RzZ4YM5/alqx8YQagSoCPtPjTnoMDXsL9zIzzbLgDxYa0RQCqMnJ7fD0yrFu1yE2g7tQDAD0pn+GyfZ3Ez2t8YkBq1pbZuR15GORmt6XlTivlJ3FGKU1qiPoT4IBGzfJ7cHptNfVEhCMGDcTb8+ANoUvCKhXZcVqYN5rISO0EiPBLUWt8Cz3dReqwLeAtysWgqEztPLDMEUVnrc2AcbmP+DP8bnB7vgdfG8400YeCvYqIf2CY7CNc6yob3avZ0p+j2lRW8JZ1tWfiPYAI3xSTkKmORPo/+bwhAq8NDw2To8SLsbiNsZBn+Dji516pjCP8Gn6R13uI22tUAAAAASUVORK5CYII=" />
                  </svg>
                  {v.linkText}
                </div>
                <div className="float-right">

                </div>
              </div>
            </a>
            {v.subMenu && v.subMenu.length && <ul className="">
              {this._getFullMenu(v.subMenu, count)}
            </ul>
              || ''}
          </li>
        )
      })(count)
    }
    return result
  }
  private _getFullMenu(menu: IMenuItemData[] | undefined, count: number = 0): JSX.Element[] | null {
    if (!menu) {
      return ([
        <div className="wkea-nav-menu-item">
          <a href="javascropt:void(0)" className="nodata">暂无内容</a>
        </div>
      ])
    }
    const result = [];
    count++;
    menu = menu.filter(v => v.id);
    for (let i = 0; i < menu.length; i++) {
      const v = menu[i];
      if (v.subMenu) {
        if (String(v.linkText).replace(/(^\s*)|(\s*$)/g, '').replace(/[\r\n]/g, '') === '') {

        } else {
          ((count) => {
            result.push(
              <li className={`${this.state.activeIds.find(n => n === v.id) ? 'wkea-index-nav-active' : ''}`}
                onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
                onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
                <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFIey?pubver=1" alt="" />
                <a className="" href={v.linkURL}>{v.linkText}</a>
                {/* {v.subMenu && v.subMenu.length && <ul>
                  {this._getFullMenu(v.subMenu, count)}
                </ul>
                  || ''} */}
              </li>
            )
          })(count)
        }
      } else {
        ((count) => {
          result.push(
            <li className={`${this.state.activeIds.find(n => n === v.id) ? 'wkea-index-nav-activect' : ''}`}
              onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
              onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
              <a href={v.linkURL}>{v.linkText}
              </a>
            </li>
          )
        })(count)
      }

    }
    return result
  }

  private _onMouseEnterHandle(id: number) {
    const timer = this.state.closeTimeOut.find(v => v.id === id)
    if (timer) {
      // @ts-ignore
      clearTimeout(timer)
    }
    const newIndex = this.state.currentIndex + 1
    const _itemIndexs = JSON.parse(JSON.stringify(this.state.itemIndexs))
    // @ts-ignore
    let targetIndex = _itemIndexs.find(v => v.id === id)
    if (targetIndex) {
      targetIndex.index = newIndex
    } else {
      targetIndex = {
        id: id,
        index: newIndex
      }
      _itemIndexs.push(targetIndex)
    }
    const state = {
      activeIds: uniq([...this.state.activeIds, id]),
      closeTimeOut: this.state.closeTimeOut.filter(v => v.id !== id),
      itemIndexs: _itemIndexs,
      currentIndex: newIndex
    }
    this.setState(state)
  }

  private _onMouseLeaveHandle(id: number) {
    const timer = setTimeout(() => {
      const _activeIds = this.state.activeIds.filter(v => v !== id)
      let state
      if (_activeIds.length) {
        state = { activeIds: _activeIds }
      } else {
        state = { activeIds: _activeIds, itemIndexs: [], currentIndex: 20 }
      }
      // @ts-ignore
      this.setState(state)
    }, 150)
    this.setState({ closeTimeOut: [...this.state.closeTimeOut, { id: id, timer: timer }] })
  }

  // private _isAlwaysShow () {
  //   // const result = document.location.pathname === '/' || (document.location.pathname === '/page' && document.location.search.includes('mock')) 
  //   // return result
  //   return false
  // }
}

export default NavigationMenuView;