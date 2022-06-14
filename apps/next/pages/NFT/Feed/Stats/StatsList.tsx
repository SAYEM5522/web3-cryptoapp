import Image from 'next/image'
import React, { useCallback } from 'react'
import styles from "../../NftCss/Feed/Stats/StatsList.module.css"
import {BsArrowRight} from 'react-icons/bs'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setUserProfileName } from '../../../features/Nftfeatures'
const StatsItem=[
  {
    id:1,
    name:'Great Goat',
    image:'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x6728d91abacdbac2f326baa384513a523c21b80a:6345/3950deee',
    volume:950,
    floor_price:0.01,
    items:100,
    token:'ETH',
    token_logo:'',
    catagory:'Crypto',
    time:'06-06-2022',
    ProfileId:1,
   
  },
  {
    id:2,
    name:'Great Goat',
    image:'https://lh3.googleusercontent.com/20749ie-OQXjwxzOuvTyeUD8y8zc34PHhLyZUxWBY5UQKh15jGw8JwtpAtrppXhDmuRgPHabG9KxnpFV7UnMEFmtLC0pttrWGxNAFw=s120',
    volume:870,
    floor_price:0.01,
    items:100,
    token:'ETH',
    token_logo:'',
    catagory:'Crypto',
    time:'06-06-2022',
    ProfileId:2,
  },
  {
    id:3,
    name:'We Are All Going To Die',
    image:'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x6728d91abacdbac2f326baa384513a523c21b80a:6345/3950deee',
    volume:700,
    floor_price:0.01,
    items:100,
    token:'ETH',
    token_logo:'',
    catagory:'Crypto',
    time:'06-03-2022',
    ProfileId:3,
  },
  {
    id:4,
    name:'Great Goat',
    image:'https://lh3.googleusercontent.com/3y3MythDHRH46bNeSGSwYo3pK8J_3ngKMUAwPyvl5cdKn9JiLSL46KWxZtEVo7V8ILraMEANA5RB-r_LrKmwq0qZebpa1pHqybJ7gQ=s120',
    volume:650,
    floor_price:0.01,
    items:100,
    token:'ETH',
    token_logo:'',
    catagory:'Crypto',
    time:'05-06-2022',
    ProfileId:4,
  },
  {
    id:5,
    name:'We Are All Going To Die',
    image:'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x6728d91abacdbac2f326baa384513a523c21b80a:6345/3950deee',
    volume:400,
    floor_price:4,
    items:100,
    token:'ETH',
    token_logo:'',
    catagory:'Crypto',
    time:'06-08-2022',
    ProfileId:5,
  },
  {
    id:6,
    name:'Great Goat #5654',
    image:'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x6728d91abacdbac2f326baa384513a523c21b80a:6345/3950deee',
    volume:400,
    floor_price:0.01,
    items:100,
    token:'ETH',
    token_logo:'',
    catagory:'Crypto',
    time:'05-20-2022',
    ProfileId:6,
  }, {
    id:7,
    name:'We Are All Going To Die',
    image:'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x6728d91abacdbac2f326baa384513a523c21b80a:6345/3950deee',
    volume:1000,
    floor_price:3,
    items:1800,
    token:'ETH',
    token_logo:'',
    catagory:'Crypto',
    time:'06-05-2022',
    ProfileId:7,
  },
  
]
interface SProps{
  dateStats:any
}
const StatsList = ({dateStats}:SProps) => {
 const SortedStats= StatsItem.sort((a, b) => b.volume - a.volume)
 const date_range=moment().subtract(dateStats,'d').format('MM-DD-YYYY')
 const router=useRouter();
 const dispatch=useDispatch();

  return (
    <div className={styles.Stats}>
      <div>
       
      </div>
      <div className={styles.stats_Caption}>
    <p className={styles.stats_caption_1}>#</p>
    <p className={styles.stats_caption_2}>Collections</p>
    <p className={styles.stats_caption_3}>Volume</p>
    <p className={styles.stats_caption_4}>Floor Price</p>
    <p className={styles.stats_caption_5}>Items</p>
    </div>

    <div className={styles.statsList}>
      
      {
        SortedStats.map((item,index)=>{
          const GoToProfile=useCallback(()=>{
            dispatch(
              setUserProfileName({
                name:item.name,
                img:item.image,
              })
            ),
            router.push(`/NFT/Feed/UserNftProfile/${item.ProfileId}?pid=${item.ProfileId}`)
           },[])
          {
         if(moment(item.time).format("MM-DD-YYYY")>=date_range){
            return(
              <div className={styles.statsItem} onClick={GoToProfile} >
              <p className={styles.stats_index}>{index+1}</p>
              <div className={styles.statsItem_Des}>
                <Image
                 src={item.image}
                 width={60}
                  height={60}
                  alt="nft"
                  objectFit='cover'
                  className='nft-Stats-image'
                  />
                  <h4>{item.name}</h4>
              </div>
              <div className={styles.stats_volume}>
                <p>{item.volume} {item.token}</p>
              </div>
              <div className={styles.stats_price}>
                <p>{item.floor_price} {item.token}</p>
              </div>
              <div className={styles.stats_items}>
                <p>{item.items}</p>
              </div>
              <div className={styles.stats_Icon} >
              <BsArrowRight />
              </div>
            </div>
            )
         }
        }
          // return(
          //   <div className={styles.statsItem}>
          //     <p className={styles.stats_index}>{index+1}</p>
          //     <div className={styles.statsItem_Des}>
          //       <Image
          //        src={item.image}
          //        width={60}
          //         height={60}
          //         alt="nft"
          //         objectFit='cover'
          //         className='nft-Stats-image'
          //         />
          //         <h4>{item.name}</h4>
          //     </div>
          //     <div className={styles.stats_volume}>
          //       <p>{item.volume} {item.token}</p>
          //     </div>
          //     <div className={styles.stats_price}>
          //       <p>{item.floor_price} {item.token}</p>
          //     </div>
          //     <div className={styles.stats_items}>
          //       <p>{item.items}</p>
          //     </div>
          //     <div className={styles.stats_Icon} >
          //     <BsArrowRight />
          //     </div>
          //   </div>
          //     )
        }
          )
      }
    </div>
    </div>
  )
}

export default StatsList