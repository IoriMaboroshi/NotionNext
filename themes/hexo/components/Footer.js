import React from 'react'
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer
      className=' dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      <DarkModeButton/>

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={BLOG.LINK} className='underline font-bold  dark:text-gray-300 '>伊緻幻</a>.<br/>

      {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href="https://icp.gov.moe/?keyword=20224002" target="_blank"><img src="https://www.chwin.asia/icp120.png" alt="icp" width="19" height="19">萌ICP备20224002号</a><br/></>}

      <span className='hidden busuanzi_container_site_pv'>
            本站已稳定运行了
              <script type="text/javascript">
              var webstar= new Date("12/3/2022");
              var webnow = new Date();
              var dotime = webnow.getTime() - webstar.getTime();
              var donow = Math.floor(dotime / (1000 * 60 * 60 * 24));
              document.write(+donow)
              </script>
              天</span>
        <br/>
        <h1>{title}</h1>
        <span className='text-xs '>Powered by <a href='https://github.com/tangly1024/NotionNext' className='underline dark:text-gray-300'>NotionNext {BLOG.VERSION}</a>.</span></span><br/>

    </footer>
  )
}

export default Footer
