import React, { useState } from "react";
import "./SerenaProfile.css";

const SerenaProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageClick = () => {
    window.location.href = "/messaging";
  };

  return (
    <div className="profile-container">
      {/* Cover Photo */}
      <div className="cover-photo">
        <img
          src="https://th.bing.com/th/id/OIP.JnGSQBzL5KcgbzCVk8D_6QHaCv?w=325&h=129&c=7&r=0&o=5&pid=1.7"
          alt="Cover"
        />
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AJwDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAECAwUGAAcI/8QAPhAAAgEDAgQEAwUGBQQDAQAAAQIDAAQREiEFEzFBIlFhcQYUgTKRobHwFSMzQsHhB1Ji0fFDcpKyJTREgv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAoEQACAgIDAQACAQMFAAAAAAAAAQIRAyEEEjEiE0FRYXGxBTJSgZH/2gAMAwEAAhEDEQA/AMPbBQgwcjY5Jzn2oxe3pVfbR3FvBbrcQTQs0fMQTRvHrjJ2dNYGR6irApPGsTSxSxrKuuMyIya1811AZFEAslXFPGajU5qUAVZFGhRsPpSYOdvenbdK7HU7VJFDcdNq7H9qeMbbUmK4gbjp2pcUoHSkxnz61xIo/wB6dtikFL+t+9SQIfzpN6d9K7GPrXHDSP7U0jptT8DyppqDhvnSYB/OnH9ZpPLcVxwwqPKkx6GpMD0pcVJJ6/JwDhvEuB2fCeIRK4htY4kkUASwSqmnmRN2P59DXkfG/wBs219Lw3ik7TScOYwwkgaTEwUrIu3RgFP/ABXrPwtLcmwubO4me4k4TxPiHCRcSnMk8drJpjdz/mwQD6isP/iVFGnGeGzKAHn4cBJj+YxSsAT9Dj6UFB34ZSM5xRA/pQ0XTfvRC1cGxwHp+NOwfKkyqo7swVUI1MxAAznA3qtu7mJZ3guC68vHgCZXJAbxFTnGOhB2qkppaLwxOWwua7soD+9lCnSGAAZjv2woNRftPheQPmRuP8kg3PbpVPK0xd8jxDbSWbZOxbtkdKYIySkgMT+JEZEIV8nbYNjf6YqiyMK8SNALq3OkrINJzv2O3TNSiSJskOMYBGdsg96y0qFWYFgZEkKPobxbdcHp6UmqeIERSAqSQOgzv03NWUyrxmtxnpS79DVDY8VA8Fw7Ag4DHoRsO/erhbmJlBBx1wcgggddxRFKwMoUS11WUfB72ZLR45+HmW7gjnt7b5pFuXSQeEBHAGo9hqqtcGMur5UoWVwwIKkbEEeYqydg00d1z6U33HSrH9ifEBVGXht2yuFdTGqOSrDUDhGJ/Cq/TIX0BGZ8sNKqS2wOdhvtvmus5NMZ+jXbdqTrsO9d91cSL+t6X3/Kmj9b07I8/SuOPZ+A8Ot+G8Ms7aCV5wQ9xJcyHMlzNOxmkmc+bEk9fyryr434nFxT4gnELB7ewiSwjZfsu0bM0jA/9xI//mrPiXxyE4TZ8H4E0upLOG2uOISKY2wECsLdG8QJ/wAxxjsM+JcVFGR2oaQdsIiFTO8UMYeVsAtoQKpcs+NWnC/eabHGTjGT3wBXCQ3Ky83K2vDEM2pdpC8zcvT7HA7ULLk6ILhw/keyC74hMkLpCXVGYOC0WklwAA6ltxjoNvOg1t5BDFcW0mua4hBlI3dJHkwkaZOrWdJJ9DR0t3wi8it4445kkhkLTFWdjMAwYA7BQAeuc+m9U8k8clyzwvHEI0ZQMspyF0MyaQdz26UtFuTHZR/HEHZJVkjF4rBtSsxmMitp1Y1OR4j6e1JczQ6uXag6VUK7MNKSHfJVWyceW+anuUDS2h1giWKKQtq5jAtkaNJ2B7Yqz4f8PzXDiRwRCRlQ4/eP2G+NqLLJGCuQCGKWR9Yoo43Co5dED6AExq1Mcjt06d6VZ8oysigEDRttnVjOomt9b/Dljbq7NbJIXQqecA+Mjrg7VXXnAEZGSIBcDKjlK3Tr41Ib22NLrlwbobfByRjZlALNictl9gxUYXOclh1FLKbZRmHIkXOVOpWx2IAODTpbefh86kx4ZSCMksvv50QvD47155A6xS8mSQLljzZTuAmenbNNJp7QlKLWmW3CeNxXl/wccQEkSWwtIoWhTKSLagaUZkGRnAyQh9qPvLhry6vp25eu5uJpGER1IGkc7KfLfasZou45oIo1kjmDpiOQqoMobSAwbC+m/nVpwUS23F4re9YRBbiAzKxBVQsqlmGCRgDOcGiKVC0sa9RvOOWEs3FeISxX3C10GNOXJeiKdOTEkekqygZ286ruAllv55h/+fhXFrjvnItmQf8AtRHFLKS5vOKX0V3wuWGWe5uV0X0XNMZYsAI3w2cdqg4URHF8RSkqNPBpokyQCWnmijwM+maIvBRL5oj+HwP2vYMyhlgju7hlYZUiG1lfDeh6Gm8StYAkHErBSOHXhIVM5a0uAMvbSH06oe49ql4KCs/FZgP/AK/BOKvnsC6LCP8A2qDht5DbNNbXaNJw29CxXka7suPsTxf60O4+7vU7s532bQpihXgMM+hPmJuLzxiTA18mG2TKZPbJzTbLhHGeIxNPZ2rSxLI0RcMqjWoBIGo+tHcYtG4fw3gdmZI5Q0/FLtJYzlJYZJI1jkHuAP0K0nwpeWCcHhie8ht5IZ7lXSR1QsWcyB9z3BH3elQ5UrRVzcY2jzJEwP6VOgNNUb96lTUzKgBYsdwN9gMmobpWOpNukSJcIHjt1blrzEe6lVNTGEH7IOx8z1/OhpiyScRS3ZjBKUVyfAZQZNSA4zv51Ot1GjPDy20yFS0oB1LFghmwN++316dRDO1/OYbiKIPHO8iW7vkJy4VViz57AMO9ZMpOUmzbxwUYJHXStFFFZJD8u95bpLNkg6SpZpGTO+CV1de/3iNZ8M5Vmo5kU08j/N5YaYYwBpcax38iT/SrC/tr+bhlnxSO7eWcXF3DNIsgDKBg7b9+v1FDcPjjvDMOIza9dvIEkkLOQ0S6kQDrvuPc/ddOo2iJRuVP9lnacF4TeXsU1ishs7aKNAXOedOPtN6j9dq29tYhANgAFwNqpeAyWEKRBIZVWZs6iEG52GxOcVsRGFGB5ZrPyuUns0cKhCOvQB4FxviqyaBf5cbH1zg1ZO93LqEaQoSsmgyuWwc4XKrvv1/D1qvlsfiJjrX5UqNyAAMjHmTnP1qI4pLZeXIg9FRfcMtrtHBQLIADrTAbb32zWZubN7G8trlpQY2IVo2XxadgSdPT0861s8t1buq3kHLR2CJKpDRs/bJUkD0zVJxdVcchWUTTRu6htwFB0sTnYD+tM4ckoOmKcjFHJHsvTMNNEly73MjXUJZl8DZ1Ic77j69B0qOxBjkL4JKIzwtoL6WK7AjuD0+ufYkwxW6rJKwjSSK4iDBdyUULqUf6jsfrQ55qtbzAqjRoqlhvrAOAW7H+3pWjd6MnrVMubCWdomW4YNIszpltnULgaWH5ehozH4b1VRXNosUyiMtdqwIMbvoZNIYqquP5R61bRMrxRtvkjGeoNGxTvTF8+Lq7EAYBsEjI0tg4yPI0wrUpHqKbjFHFKOeWeSOCKSRmjt1dIFY5Eau2shfTO9R496fj0rsen4VJ1UArk9OvX7qhnjmRllc7FkCYI+wwO/6/5mXbTsduuPWp5rfKFEkLB0eTKEkBxpQA9MY7+9I8mfVJGjxYdpWcL6WJpIykLxvErGWOPA8TamRSwyRjY/3qO94jL8tDY4PJWeYxEKVwG0JpONugzjt9KiluLvQLNokSKBispCHXKI231Md++w/QIuLkXs63BjiREZEiAA5aIoO4AB2AG+3XbvSKSTTNR7VFVDOYP2hbzvPCgRpBBg5kuDpEaupXoBvvjYfQ2FqOH2fD0mu7+BZpHQrAis9xp169bY8Kj8T6Z2MkZrlOLz3cVqYJYXhaaVV5weKMlZYz9sZI0999qP4V8O8K4rYwXTBhPNGqu7ZJDxNy3Kr9nDYBHvVpTTj9FFGXb5D7PiPAr5ENpcxrKBqMUiBDsM7A4P3ZrTcMvg0DyzDPKLIR5kVVrwXh1gb+/dpZbu7SX5mQvo5quBqXRHhAGwM7b4qSBglpEuhvHmRyBgDV0H0GKUyOCacB/HGc4uORf+Bs1zGkE/EJQWjjDO0UQy3+lVVdyTWYl+Mvig3/AOyk4DpuSMfJ5cXY1QG4HgB6hfEQfbrWlisYJ4ldk1qCdJO+kkYO43FIOC8F1mVrROaRhpDkyEY041klsfWjYskYq2gGfHKTSi/CkseIycZt5mktpER2aGaGVT4WHXBIAONjQPFbPTiQYL/LiB9WldYVtSsTjY5/P6jXJb2NmhW3hRB23J/Os/xVwc52yCRQb+tB+rcfoyUlkL+0jkjkz8taQwyQsSHzGcnR2yf1nOKAZLEzXAtuf8oqbmULzkXB3Yr4cnBx/ejZ7O95VtPbRyMWd+ZKpOZHznRjqT3P5+QPOvBL8oQLdZZkjuEYlUGxjZpc75AJrQhKzMnBIfFHFOTFbmMyq9wY2DiJpoWRV2DbHGDtt9r0xVrAskH7mX+JgEYOpW1DIKkdsb1XotnE04gnCRSzEJpUFmijYdHk3Hnt1/JPntd1FHBEywYP8VgzMMdVbAPY7VaMqlaB5YXDZcbEDp3+hppH69aSJ9aBsbH7/enEdPStFbVmQ1TG7il3/WK49zSjHn+NSQVoDeIjbCk56DPvT0E4spLWzjka7LBiVck8s4OAMZx5kn86W2hM7u2o6beGWVkUbyHKxqmTsPtZ+nrUet7iW8CykMjGMopxzY4sAZIxvt+H0rL5P+42eJqFhg1397czuql5JVQlThDMy5JI6b7H60VtLcWnD0hjKcOkmtppY1Gqadi0jqmDuBsPw9q9BdW8LSKrENocFlIOc9QG9gOlSmUWzGcw3RvJUh+XC4EaE48LKQc9sYx+FKeseSBeI3VsJVhWDlW5IM7kB5HXbwIGGnbGBsPurb/Ds1tJawNbx8qBkXkx6tZRP9TZ3PXJrG8QnMsHzjoEW7drZoig/cybseWTvg5JX+1G/C9+Ikms+jW5DqMY8DkkkfX86vON49fojFPrm3+zdcTJKpGuCgQySLrVGkwc6Rq2PtnfPpTnu4jZR6bX5g6Ty44f3crHGcOzbD6ihBJLcOEUKcBS7OcKue3nR0fNCcsSQxKOrBHdifLTsPxpaOOUtpDr80QcP+bEqlbZ7bmA86Dnc9NOCVJcKo1DbYZq7URtCxkADKOvnVWs01u2sMsqjclQVOPVcn86fNerPCWj67agCNs0VfC+hbJCUpL/ACB3koUsFO3as3xGRpXCIc4zqI9atbpiFYk77dfUgVVrp15bopLE+g3NBjt2NTdKge1gvYfmLpnRITamGBpgxRS8mGXUPCrEqCucdx7Zlee1/eSXsTzwYk1lFCtsvLR48jqu23lWy4jxFLf4XSCeFWm4rd3BgSPI5iWzrDEDnvqLZx10diazfzvE7ONOXLHrmnliyUVpA0CpGZEyMA5O3Xdc03BOO/5M+clN1/APfW9jFctESqRxwTIJYg7maTIAJRz4T50SBCqtFbYYS/LKnNVeYFGJDpbOwJGDvQkliwQXk0mbZJNw7kyyMVDNpzueuSaKWf5wl4rURQWcLzO8hOltLAAP0+1jYVdvyile2EJKh1aQNIC4ZTsMjVpHtXcxTv28+1BYaKaUFSisdWjAAAbDAqvlvtWq4b8G8Y4tw+y4jaXNikdzGziOczrJs7JuVQjfFaOKVxRj5o1JlCXGfr2rhIPIGiON8H4lwCa3hv2ti1xG8sZtpGddKtpOrUqn8Kntvhf4su7e2urfhjvBcxRzwv8AMWq6o3GpTpaQEZ9qNYvRnuD3ohluGncGGTlwzEH9+ImJ1Mm2/Rc/2ohHcvEYcKIHCoAxLAFmJYMfFk/1qthkEMNrycLz1k50uxZZVkYaWwNsDSQe+aMTRbIs0cwkeSaNtUrajKrMMk4Gd/M1k5VcmzbwNKCLyNhZwfMTW6yzSMtvaRS/ZTlR51yDc43zj1+6JPnZ4bhkEklzMWllkcaNAHi/d56Z2XptgbDVTOJokJGzJFNKJeU2oSkuc6jk5HUDr0FF8Wkjt47K3e7to4x4XjQFnMUn2sKBkk7hdxuAc7ZCit/9j3hVT8pE5d90hEvy8EGpiHYfxGdx17ZwAAdhk7gcPa6tr+xkMTE3Ei28a9XaOUhVA8xnH3VK91KYWVo2y0PK1ZzIsYP2n7E4wKYksVrccIniZnks7uC5csu0ZikSQKASc9Dn9ZbjrTFJ/wDJG8t7i2MkMpLqjRhJSjtoY/ys6j0/W9WwfhDBdVyh+sh/DFZhbmJON8cscgG14pdxqBgDlGVmjKgdsED6VtOHCOQKrad+21CU5QfSh6OW8fZFc/y0uRFHqzsGIIXHnUnLtraHRGirtk6QFBPXoKPvFiicp4Q2O3QVSXkyN4MnqD4Tg+E5oeScm6ZZS7xUgO5cNn9YqsnlEcc2MljG+AD2x4ifpmpy8967LarqQEq8/wD0gR1Cn+Y+eNvXtU1tYxLd2aznUhnie4Zh1ghPPkGPVVNUjErOVopePX81nxuw4WqxPFwiw4bZMrxc8i+cc+WWJeuvVIRsew8qDhdYBOlzbxSi3kKBGDKecdS8wBvFsB4tx0FVt3fXMvFL2+YJ8xd3UtyG3VxJMxchWG/h6LVxEZIJoDaM6fxIYzLy3EkwAjfSBnPpt1PnTeaqVCOC936SX0Nr8jBcXDtiSN5EEeNHMK5EYOcDv29PWqzRevaxRi4BjTB5Orxrk98bH7v7nywvNaX1rLmKazX5lwgAUan0hXyQurf3qviQ2ly8k1wrusEZPLDOhaQauWWXbYbe49aHBvqFmqY64s7iOSGZXQryVK8sSKDF0VyH3ztg9/6+3/CsfJ+Hfh+M9Rw63Y+7DWfzrxK7ndQOarKFgzCAxVdIGsdRnODt0r2v4bvYbnhXDxECFitLaPOxGViUY28qc40m1TM7lxSlaPO/8Up//mLSMf8AS4QrH0Z5Zj/QV6lwePk8J4NF05XDrKP/AMYEFVXGvg74c47ctd38VybhokhLw3MsY0JnA0g6e57VfxoqIiL9lFVF9lAApuxFeny7AG5gwDnfpkAgb71prA20X7KuLm3Bje5GHdcpGqPnGAdz7+feqC2RGmiDHALbncYH0qxleYPBBnmgTCaVYv4cKDbShHh9zSnIpuh/j2tlsZElvbi44nrlhk56RIF/hNq1oUUEEkep++op4beMmNEuoZg0MtpNctGMoAdQAGw65GD6e8lmOKi3d5oYZrFW1pJMELB9xgEb47bntVW7Wty82FeOJ5NNvEGLZOTkgnoBk4zSMVcv7Gm38lhLqCHmoyQtqKgDBmmUY8TnfA6n/jFfdWirFarbI+iVJWYs4LSHGk7gDHU/roROt4ssKySGSOGKNY4+ZnKYGQDnGcdTUPEWnRIuZJI8UoYWyudTJ30gny2z/erR9RWa+WR8TvJW4q3ErZlE5itnnXJYNMLeMSx7eTAj3Ga0Nj8XwtFEXtb6N2G2iFpFY5xlWX/asxDayTQoI0kVgFbUwCrq/wAwPf8AvWk4bbtHw4W7HLRFyuMgD94ZMDO+N6tlcJLa2DwqcX8vRYvx24nGYbK8Yno0kbRqPctXRWN1etm9k/dE5NvFkRsPKRvtH22HoaPhROSuOuBnUF/HajrZMjoAPIEY+tLppeDrTfrJYoo4YVVFUBVCgAAKABgAAVTcSkeNZtOC7xSxMxHRJFKNj1wSPrV++FQ464+77qoryMvnOd9q5OtkNWqMbeWpSFZGQtEWHNUDLDByGXJAyKW0vQ4ib958xENcM6OvgaPJDFWXOd9sH/etW1lG8IjwDnfH96zd9waW3ZprXSrAlypzpY49OlFjkUl1kBnhcH2iSvBaRtYyPLcM7MFvUSAkactujFt2OST7/fDdQSxAciASW0brzLg5yyynwltR2Iwdh5U234zd2kEsJCF5QEbWuoxsxOphqzg4wOp9DvTpJpuJxxTqLaIQySBo40KgBmBDLGTv5/azUJNPfhzaktenI9y4MSKMzr4mYISIShDaNQ2BwM432r0H4I4uJVk4YZOcbdS0bZDfu1bRpJA7dvOsJOVWZ3ia4EluA/NKmJlYZ0sisMge5/vZ8GuPlL79tQEx8orcXtvrIWW3kAhwu2Njgk6evvV8WTpKwGfF3hX7NHf/ABvxq3+JH4NBbWElueJ29gjSJNzQHeONjqV8ZGTjw9q9DA6+9eM2sYv/AI0sLtShS64982ApBCqrNNpz9P139o+laqaatGM4tOmfLifa3Bxg9Oo9RVjavaLI5mGObFJGieIlugRcL6+lVoOCBjzp0ZbnRqpCu38NttmJOASN+uMUHNG9jeCVOi9ujKI31l41W4CGFSRDMF2yAgCkg7ZxvmhdcbrJpgVZcMgZskAjBwvkcDH+2dyD8+LYWbctzDIjTzpnmRswIaJiwGMbKTjqOvnzRT2yRR3CpK4mDuHX7KjcAnrj0rPTUUajVsfG1mjRSSsJ5wqYWVS7RMuAAVbYg4yBv260VNaWs9w8+0ruqExNGUMIA8StnY5O+3XPbpUZhFxMskkSJmVHnbHLAQ9Mae2dhtnb1o1EPzMkaeJUCB3QkqzaQSASB06UCUt6DKN+hdrZro5j40qCRtsMCusmWTmkDCvI2kenQU+SWZ0EEaFcghj5A7Yom0tdBQKPDpA+tVT/AJCNbpBIOiLBPQf2ou1Y4HehbpQoUdzjOKItXQAE/wDJrkSw9sEdPSg54lDB9seXU1O1wgG5Cj6ZoGe8iJwG26EnGTXM5IYds7dfvoZ43uJEgiieWaQkRxxrqdj6AfjRtjb3PFJWhtF1aCBNK38KEHfxkd/IdfzracN4VZ8MQiEa55BiaeQDmSY3wPJfT8+tFw8eWR3+hfPyo4VXrMBL/h7xu7HNMtjbvvhZXeRxns3KQr+JqlvPhX4p4El5LPZpe20kDIZuHu0oj3BV3iIWQaSAQQp9/P2kdCXPtk9vyqF3BPgaTI6YOw+taSwRSpGS+TNy7M8LXi08zXsSxB+ZCqJdzEqcQKkrJGAcE5Gcb/jUsF3FILSYNpmUSmYLtBlzjSFJ0+LqQB+del8S+Evhi+Jb5P5a4klM7T2R5EnMzqLlR4CfPK15txzhM3BuINHdcsrKj3NvNGvLhlUvjVGmTgjoy9vPBBKuXB1WhvHyFP8AuS3cUTIkqQC3WQa1MassTOB4guSRttnH/IZe6i8AuLhcdhLIMHuMBqKtxf3zskapyYo15Cu4CRxjDFQzee5qApclmMow+o+W47EY2o/Eya6tivMx77JGYLadXmRiiOGxpNMI2LhnMfLCQtM7PrA2CkHbqN+w86FYjfJ2q14fFFIsUfjDQo0krhXAdm3C5XxYXqdqJyJVErxY3MOhjhVr6SMzRvHIeWlxMFmdcFTzsbFshSfY9e1pbgXMltzQEkkw3M/mBC7uobz/ACNBcP1CEyRrHzvmEULcW4kDRIDkHXtv1xsRtWgiinurtn8Du0miABVAwqhANK7dBWVJ2bC0VzwcXn4ddSPHbY+bSEa1RXAcMQ4wMduuPajOH2vy8QQnUxJdmPVixyf7e1ai74I9nwi+lkcMzyWLsi9EZXZTg+ur9ZqliAwPwx5VTLFwpMNgksltEqQqzKaNIiiQaQM4zUCkBfUUmrOaEmHaB7jW7Ak96niKogz/AMU19J39KGkmVRu33URMG0OljMpPiwD2FE8M+HpOKS/bkS0RsTzjvjrHDnbV5nt+FEcE4TccXbny6ouHIxBcbPcsNisR8uxb6Dfdd3HFFDHHDCixxRqFRUACqo7CncHH7/UvDO5PK6fEPf8ABFaWlnYwR2tpEkUMY2VRsPNmJ3JPcmpcjck4Ub79/U01mUg7gINyT/MaYNUhBOw6qD2H+Zh+VaKVGQ97Y7UHJz9le3r6/r+zWJ+lLgAeQFOAyOlSQCuDkn00j2qn47waDjVrao8xgmtJJ5oJ1jWTRqQK6ujdVYdcEHYEHbBv2TPaqjjt0bK2iiRJ9dydJnjlMEcA1qo1yx5nBbOECISSMZXVk86apkptO0eUSQXVlxd7GcSW6xyI8gctEHg2fJGMYbBC7bHbtStcvASIiJOYTNJ4GKo8hLaFPTAGOlH/ABFaqbSzu4lWNrZmsL1EVIgqliyiRCzPqXuufACAcMdKAwW/C7mJHN3FZso5TxySaWkZNjLhcjxew9vPMmvxys0oP8sP6mRwCfc7/wC9argfC3vrW6NtAHe2SWVmDLqBYHSqg42OnPXv3zWSZ9ILdwM17b8J8EfhNknODCaaG1klUgalk5epwdugJwB6U9nh3pCeDJ+O2ZK2t0keK1jZSXiFzpRm8MjIApOcHfODt3+h9B4JweKyiSSZuZOrsAdKqsY2XCge3Uk0THZ2okkdYo4yzamMaIpb/uIGaMhwDIv+pyPwNBxYFB2w2XkOapaIeODVwfiqgfZiST/wkVv6Vh0IA2reX6mTh/FE6lrG4A9wjEV55ExZR6gUrzV9Jjv+nuoyX9QnUTsKQkqMmlQYyTQlxOM6fKkkrNJyHSzEKaN4BwKbjUgurkMnC42xkEq12ynBSI9dA/mb6DzVeBcCl43ILm6DJwqJiDglXvHU7xoRvoH8x+g7lfQ1WOJI4o0VI41VERFCqiqMAKBtgU/x+Pf1LwyuVy+vxD0VEjiRI40VI41VERAFVVUYCqBtgUx26Dz7DvXM5zpXc/gPeom68tT42+23cL+ulaRkCfbJLbohxt0LeQ9KIAIX1O5/2piKNgPsr096eTUnMYd8D1/4p/pTO6DzJP0AqQVxwhwoZjnCqWOBk4AzsKwHELsXV5dXrQ3EAQwSaLye4SW05kMYZZVUSNHkHAFssmoErLgZ06T4hv4Yov2cro13c213MLVTDJPNAkMinFpPhJFyRqQyJqAO/hwcwYp1heWOHC2JvbWF4kvIordkt4Ex+5Au4iSCNNmHRuhJCFjFkEMsSyQ3dnPlFeFLWaJlCGBJUHLR4ImcKCd4YlkdnIDM7KmIPPp7YRSNDKZhNAXgm0jUOZE7I3TyII69vWvRpgInYgqBb/MSMzskEVvbzT3DOQ1t+4iRsASMmZHyNaxlxImX45ZcW/aEknD4rpUljiedLaGSHTOF5Z5kEKEIxAUhTuAQD4s0vmha0M8fIoumZv4btoLz4g+H7WddUMvELfmJth1QmTSc9jjevfiT4j3JOa6upmQvERScmpIyeafY/wDqa6uqpYJChhIp6MhUj0YYNeXWxOw9x9xxXV1I8zyJp8D2QYxIQ48qA4ZbxcR4tw+zuC/IuLgrKEbSzIqs+nPXfGD+sdXUpjX0h3M2os9ZSOOKOKKJFjijVUjRAFVEUYCqB2FMcnKAH7RIJ79O1dXVtI86cQFXbyzUcf2NX8zkkmurqkkmAwu1JXV1cQIP4h9E2+pqVeo9xXV1ccefcVUJwf4kvovAILy9hazcC5sLh24wsbT3FteCRGkOxBPTAxgDFNv5jFBxqcKXFo3xVpjkluW1Nbm1jUpOZPmYwQcMsUsa4GNIGx6uoa2kQdcAi8ig1ECXisoDpiNohPdXMTPCsQVFlxn98F5u5zIQcUyFNcEcgluolabiMaxWt1c20Ma29/c2o0pA65LaNTE5JLHfGFTq6rEH/9k="
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-details">
          <h1>Serena Williams</h1>
          <p className="bio">
            23x Grand Slam Champion | Tennis Legend | Entrepreneur
          </p>
          <p className="location">United States | Former World No.1</p>
          <div className="buttons">
            <button
              className={isFollowing ? "following" : "follow"}
              onClick={handleFollowClick}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="message" onClick={handleMessageClick}>
              Message
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>About</h2>
        <p>
          One of the greatest tennis players of all time, with 23 Grand Slam
          titles and a career spanning over two decades. Advocate for equality,
          businesswoman, and role model.
        </p>
      </div>

      {/* Achievements */}
      <div className="achievements">
        <h2>Top Achievements</h2>
        <ul>
          <li>23x Grand Slam Champion</li>
          <li>4x Olympic Gold Medalist</li>
          <li>319 Weeks as World No.1</li>
          <li>Winner of 73 WTA Titles</li>
          <li>Influential Advocate for Women in Sports</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="posts">
        <h2>Recent Posts</h2>
        <div className="post">
          <img
            src="data:image/jpeg;base64,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"
            alt="Post 1"
            className="post-img"
          />
          <p>
            "Grateful for this journey and all the amazing moments along the
            way! 🎾💪"
          </p>
          <span>1.8M Likes | 400K Comments</span>
        </div>
        <div className="post">
          <img
            src="https://th.bing.com/th/id/OIP.E6ceK3TePOweDrQrvQCMBwHaFj?w=196&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Post 2"
            className="post-img"
          />
          <p>"Hard work always pays off. Keep pushing forward! 💥🔥"</p>
          <span>2.1M Likes | 500K Comments</span>
        </div>
      </div>

      {/* More Profiles for You */}
      <div className="more-profiles">
        <h2>More profiles for you</h2>
        <div className="profile-suggestion">
          <img
            src="https://th.bing.com/th/id/OIP.9EkjcgFXYhOcOb95NZA0EAHaFj?w=227&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Venus Williams"
          />
          <p>Venus Williams | 7x Grand Slam Champion</p>
          <button>Follow</button>
        </div>
        <div className="profile-suggestion">
          <img
            src="https://th.bing.com/th/id/OIP.irRHbHcwiaSP9UNB8FZnKwHaIp?w=156&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Naomi Osaka"
          />
          <p>Naomi Osaka | 4x Grand Slam Champion</p>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default SerenaProfile;
