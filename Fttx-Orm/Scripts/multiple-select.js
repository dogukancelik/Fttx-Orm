





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-FAj/oBu5ZPipk/rx+ettz6IRH1VLrwGnnFiEhrgGv7RkwvrhtkxJOzhN3ALrJfRihdGAVIqb5xrowkLpSw6SqA==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-0b6eee1f89d4460d83bdbee0a4cb0020.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-10kcctO8aIQaIV96pvdbnSF/NKsMQoRXQzn0Kdnx7nUufnPUDMGp1xp57ilQnZjZVbF9NZu74pHIf0knSEha7Q==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-c4d5af25254cfc8bb30ae5cb6f074c97.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-VxZgLPiRT4wMogNRwy9qVO15+ta9te/mxcvjePEjWO2b2X0gEhyzdPUdn+4AHiRMvxhOPuh5U2UA1DLmOXcKBQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-83dc1f7ebc9c7461fe1eab799b56c4c4.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>multiple-select/multiple-select.js at master · wenzhixin/multiple-select · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 27 million people use GitHub to discover, fork, and contribute to over 80 million projects.">
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/2117018?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="wenzhixin/multiple-select" /><meta property="og:url" content="https://github.com/wenzhixin/multiple-select" /><meta property="og:description" content="multiple-select - A jQuery plugin to select multiple elements with checkboxes :)" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="E7F0:1C230:6440A9:BEE8E5:5AB02455" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="E7F0:1C230:6440A9:BEE8E5:5AB02455" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="hydro-events-url" content="https://github.com/hydro_browser_events" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NWVhM2YzODJjMmU3ZTMzMzVkMTQ5NGVhY2NmMGVjMjMzMDM2YzliNTcwNDM1YzQ2YTkxNTZkYjBlMTNjM2RhMnx7InJlbW90ZV9hZGRyZXNzIjoiODguMjM3LjMwLjIxMyIsInJlcXVlc3RfaWQiOiJFN0YwOjFDMjMwOjY0NDBBOTpCRUU4RTU6NUFCMDI0NTUiLCJ0aW1lc3RhbXAiOjE1MjE0OTMwOTIsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="05fafb5738fa28e7c25139cd78647b28056ddb8d">

  <meta http-equiv="x-pjax-version" content="cafea43571b6435b45423798a64ca269">
  

      <link href="https://github.com/wenzhixin/multiple-select/commits/master.atom" rel="alternate" title="Recent Commits to multiple-select:master" type="application/atom+xml">

  <meta name="description" content="multiple-select - A jQuery plugin to select multiple elements with checkboxes :)">
  <meta name="go-import" content="github.com/wenzhixin/multiple-select git https://github.com/wenzhixin/multiple-select.git">

  <meta name="octolytics-dimension-user_id" content="2117018" /><meta name="octolytics-dimension-user_login" content="wenzhixin" /><meta name="octolytics-dimension-repository_id" content="9517907" /><meta name="octolytics-dimension-repository_nwo" content="wenzhixin/multiple-select" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="9517907" /><meta name="octolytics-dimension-repository_network_root_nwo" content="wenzhixin/multiple-select" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/wenzhixin/multiple-select/blob/master/multiple-select.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scoped-search-url="/wenzhixin/multiple-select/search" data-unscoped-search-url="/search" action="/wenzhixin/multiple-select/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a class="header-search-scope no-underline" href="/wenzhixin/multiple-select/blob/master/multiple-select.js">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fwenzhixin%2Fmultiple-select%2Fblob%2Fmaster%2Fmultiple-select.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main"
      class="application-main "
      >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fwenzhixin%2Fmultiple-select"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/wenzhixin/multiple-select/watchers"
     aria-label="88 users are watching this repository">
    88
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fwenzhixin%2Fmultiple-select"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/wenzhixin/multiple-select/stargazers"
      aria-label="1430 users starred this repository">
      1,430
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fwenzhixin%2Fmultiple-select"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/wenzhixin/multiple-select/network" class="social-count"
       aria-label="522 users forked this repository">
      522
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/wenzhixin">wenzhixin</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/wenzhixin/multiple-select">multiple-select</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /wenzhixin/multiple-select" href="/wenzhixin/multiple-select">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /wenzhixin/multiple-select/issues" href="/wenzhixin/multiple-select/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">85</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /wenzhixin/multiple-select/pulls" href="/wenzhixin/multiple-select/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">27</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /wenzhixin/multiple-select/projects" href="/wenzhixin/multiple-select/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /wenzhixin/multiple-select/pulse" href="/wenzhixin/multiple-select/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/wenzhixin/multiple-select/blob/226027ee5a12c4fcde84c8972a0538fa6c8c78ac/multiple-select.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:82a4bf596ccb2e0a871fb108ef43e44e -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/wenzhixin/multiple-select/blob/develop/multiple-select.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/wenzhixin/multiple-select/blob/gh-pages/multiple-select.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/wenzhixin/multiple-select/blob/master/multiple-select.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.2.1/multiple-select.js"
              data-name="1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.1">
                1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.2.0/multiple-select.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.1.0/multiple-select.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.9/multiple-select.js"
              data-name="1.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.9">
                1.0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.8/multiple-select.js"
              data-name="1.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.8">
                1.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.7/multiple-select.js"
              data-name="1.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.7">
                1.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.6/multiple-select.js"
              data-name="1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.6">
                1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.5/multiple-select.js"
              data-name="1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.5">
                1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.4/multiple-select.js"
              data-name="1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.4">
                1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.3/multiple-select.js"
              data-name="1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.3">
                1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.2/multiple-select.js"
              data-name="1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2">
                1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.1/multiple-select.js"
              data-name="1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.1">
                1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/wenzhixin/multiple-select/tree/1.0.0/multiple-select.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/wenzhixin/multiple-select/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy
            for="blob-path"
            aria-label="Copy file path to clipboard"
            class="btn btn-sm BtnGroup-item tooltipped tooltipped-s"
            data-copied-hint="Copied!">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/wenzhixin/multiple-select"><span>multiple-select</span></a></span></span><span class="separator">/</span><strong class="final-path">multiple-select.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/wenzhixin/multiple-select/commit/ae7d57fb7659698167943a129c046f9fe4307ceb" data-pjax>
          ae7d57f
        </a>
        <relative-time datetime="2018-02-25T05:01:56Z">Feb 25, 2018</relative-time>
      </span>
      <div>
        <img alt="@wenzhixin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/2117018?s=40&amp;v=4" width="20" />
        <a href="/wenzhixin" class="user-mention" rel="author">wenzhixin</a>
          <a href="/wenzhixin/multiple-select/commit/ae7d57fb7659698167943a129c046f9fe4307ceb" class="message" data-pjax="true" title="Update multiple-select.js">Update multiple-select.js</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>6</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="wenzhixin" href="/wenzhixin/multiple-select/commits/master/multiple-select.js?author=wenzhixin"><img alt="@wenzhixin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/2117018?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="roromix" href="/wenzhixin/multiple-select/commits/master/multiple-select.js?author=roromix"><img alt="@roromix" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/16560617?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="salavessa" href="/wenzhixin/multiple-select/commits/master/multiple-select.js?author=salavessa"><img alt="@salavessa" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/15344273?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ivansg" href="/wenzhixin/multiple-select/commits/master/multiple-select.js?author=ivansg"><img alt="@ivansg" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/649306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="0x0049" href="/wenzhixin/multiple-select/commits/master/multiple-select.js?author=0x0049"><img alt="@0x0049" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2219319?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="alexisgayte" href="/wenzhixin/multiple-select/commits/master/multiple-select.js?author=alexisgayte"><img alt="@alexisgayte" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/7965274?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@wenzhixin" height="24" src="https://avatars0.githubusercontent.com/u/2117018?s=48&amp;v=4" width="24" />
            <a href="/wenzhixin">wenzhixin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@roromix" height="24" src="https://avatars3.githubusercontent.com/u/16560617?s=48&amp;v=4" width="24" />
            <a href="/roromix">roromix</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@salavessa" height="24" src="https://avatars2.githubusercontent.com/u/15344273?s=48&amp;v=4" width="24" />
            <a href="/salavessa">salavessa</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ivansg" height="24" src="https://avatars0.githubusercontent.com/u/649306?s=48&amp;v=4" width="24" />
            <a href="/ivansg">ivansg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@0x0049" height="24" src="https://avatars3.githubusercontent.com/u/2219319?s=48&amp;v=4" width="24" />
            <a href="/0x0049">0x0049</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@alexisgayte" height="24" src="https://avatars0.githubusercontent.com/u/7965274?s=48&amp;v=4" width="24" />
            <a href="/alexisgayte">alexisgayte</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/wenzhixin/multiple-select/raw/master/multiple-select.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/wenzhixin/multiple-select/blame/master/multiple-select.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/wenzhixin/multiple-select/commits/master/multiple-select.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      789 lines (696 sloc)
      <span class="file-info-divider"></span>
    33.5 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@author</span> <span class="pl-en">zhixin wen </span>&lt;<span class="pl-c1">wenzhixin2010@gmail.com</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@version</span> <span class="pl-smi">1.2.1</span></span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://wenzhixin.net.cn/p/multiple-select/</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> (<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> it only does &#39;%s&#39;, and return &#39;&#39; when arguments are undefined</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">sprintf</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">arguments</span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">            flag <span class="pl-k">=</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">            i <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%s<span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> arg <span class="pl-k">=</span> args[i<span class="pl-k">++</span>];</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> arg <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">                flag <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> arg;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> flag <span class="pl-k">?</span> str <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">removeDiacritics</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> defaultDiacriticsRemovalMap <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AA<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA732</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AE<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u00C6\u01FC\u01E2</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AO<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA734</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AU<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA736</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AV<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA738\uA73A</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AY<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA73C</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>B<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>C<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>DZ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01F1\u01C4</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Dz<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01F2\u01C5</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>E<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>F<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0046\u24BB\uFF26\u1E1E\u0191\uA77B</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>G<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>H<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>I<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>J<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u004A\u24BF\uFF2A\u0134\u0248</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>K<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>L<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>LJ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01C7</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Lj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01C8</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>N<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NJ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01CA</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Nj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01CB</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>O<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>OI<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01A2</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>OO<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA74E</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>OU<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0222</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>P<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Q<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0051\u24C6\uFF31\uA756\uA758\u024A</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>R<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>S<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>T<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>TZ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA728</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>U<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>V<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>VY<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA760</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>W<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>X<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0058\u24CD\uFF38\u1E8A\u1E8C</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Y<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Z<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>aa<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA733</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ae<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u00E6\u01FD\u01E3</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ao<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA735</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>au<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA737</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>av<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA739\uA73B</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ay<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA73D</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>c<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>dz<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01F3\u01C6</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>e<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>f<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0066\u24D5\uFF46\u1E1F\u0192\uA77C</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>h<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hv<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0195</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>j<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u006A\u24D9\uFF4A\u0135\u01F0\u0249</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>k<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>l<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>lj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01C9</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>nj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01CC</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>o<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>oi<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u01A3</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ou<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0223</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>oo<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA74F</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>p<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>q<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0071\u24E0\uFF51\u024B\uA757\uA759</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>r<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>t<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>tz<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA729</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>u<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>v<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>vy<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\uA761</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>w<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>x<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0078\u24E7\uFF58\u1E8B\u1E8D</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>y<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF</span>]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">            {<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>z<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763</span>]</span><span class="pl-pds">/</span>g</span>}</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        ];</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">defaultDiacriticsRemovalMap</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">            str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>(defaultDiacriticsRemovalMap[i].<span class="pl-smi">letters</span>, defaultDiacriticsRemovalMap[i].<span class="pl-smi">base</span>);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">   };</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">MultipleSelect</span>(<span class="pl-smi">$el</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">            name <span class="pl-k">=</span> <span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-smi">options</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-c1">options</span> <span class="pl-k">=</span> options;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> hide select element</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$el</span> <span class="pl-k">=</span> <span class="pl-smi">$el</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> label element</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$label</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">$label</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$label</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>label[for=&quot;%s&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>:<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>:<span class="pl-pds">&#39;</span></span>)));</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> restore class and title from select element</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$parent</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-en">sprintf</span>(</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;ms-parent %s&quot; %s/&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title=&quot;%s&quot;<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>))));</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> add placeholder to choice button</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-en">sprintf</span>([</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;button type=&quot;button&quot; class=&quot;ms-choice&quot;&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;placeholder&quot;&gt;%s&lt;/span&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/button&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">            ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">placeholder</span>));</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> default position is bottom</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;ms-drop %s&quot;%s&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">position</span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> style=&quot;width: %s&quot;<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">dropWidth</span>)));</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-c1">after</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>.<span class="pl-c1">append</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>);</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>.<span class="pl-c1">append</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>);</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-c1">outerWidth</span>() <span class="pl-k">+</span> <span class="pl-c1">20</span>);</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">selectAllName</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>data-name=&quot;selectAll<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">selectGroupName</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>data-name=&quot;selectGroup<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">selectItemName</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>data-name=&quot;selectItem<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">keepOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>)[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-smi">that</span>.<span class="pl-smi">$choice</span>[<span class="pl-c1">0</span>] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-en">parents</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.ms-choice<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-smi">that</span>.<span class="pl-smi">$choice</span>[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ((<span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>)[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-smi">that</span>.<span class="pl-smi">$drop</span>[<span class="pl-c1">0</span>] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-en">parents</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.ms-drop<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>] <span class="pl-k">!==</span> <span class="pl-smi">that</span>.<span class="pl-smi">$drop</span>[<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span> <span class="pl-k">!==</span> $el[<span class="pl-c1">0</span>]) <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">isOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">MultipleSelect</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">constructor</span>: MultipleSelect,</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">        init: <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">                $ul <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;ul&gt;&lt;/ul&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">filter</span>) {</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">append</span>([</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;ms-search&quot;&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; autocomplete=&quot;off&quot; autocorrect=&quot;off&quot; autocapitilize=&quot;off&quot; spellcheck=&quot;false&quot;&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selectAll</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">single</span>) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$ul</span>.<span class="pl-c1">append</span>([</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;ms-select-all&quot;&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;checkbox&quot; %s /&gt; <span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">selectAllName</span>),</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selectAllDelimiter</span>[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selectAllText</span>,</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selectAllDelimiter</span>[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/li&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">                ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">children</span>(), <span class="pl-k">function</span> (<span class="pl-smi">i</span>, <span class="pl-smi">elm</span>) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$ul</span>.<span class="pl-c1">append</span>(<span class="pl-smi">that</span>.<span class="pl-en">optionToHtml</span>(i, elm));</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$ul</span>.<span class="pl-c1">append</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;ms-no-results&quot;&gt;%s&lt;/li&gt;<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">noMatchesFound</span>));</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">append</span>($ul);</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ul<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>max-height<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">maxHeight</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.multiple<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">multipleWidth</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$searchInput</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.ms-search input<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">selectAllName</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">selectGroupName</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">selectItemName</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]:enabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$disableItems</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">selectItemName</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]:disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$noResults</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.ms-no-results<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">events</span>();</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">updateSelectAll</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">update</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">isOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-c1">open</span>();</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">optionToHtml</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">i</span>, <span class="pl-smi">elm</span>, <span class="pl-smi">group</span>, <span class="pl-smi">groupDisabled</span>) {</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">                $elm <span class="pl-k">=</span> <span class="pl-en">$</span>(elm),</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">                classes <span class="pl-k">=</span> <span class="pl-smi">$elm</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">                title <span class="pl-k">=</span> <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title=&quot;%s&quot;<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$elm</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>)),</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">                multiple <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">multiple</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>multiple<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">                disabled,</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">                type <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">single</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>radio<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>checkbox<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">$elm</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-smi">$elm</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">                    text <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-en">textTemplate</span>($elm),</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">                    selected <span class="pl-k">=</span> <span class="pl-smi">$elm</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">                    style <span class="pl-k">=</span> <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style=&quot;%s&quot;<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">styler</span>(value)),</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">                    $el;</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">                disabled <span class="pl-k">=</span> groupDisabled <span class="pl-k">||</span> <span class="pl-smi">$elm</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">                $el <span class="pl-k">=</span> <span class="pl-en">$</span>([</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;%s %s&quot; %s %s&gt;<span class="pl-pds">&#39;</span></span>, multiple, classes, title, style),</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label class=&quot;%s&quot;&gt;<span class="pl-pds">&#39;</span></span>, disabled <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;%s&quot; %s%s%s%s&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">                        type, <span class="pl-c1">this</span>.<span class="pl-smi">selectItemName</span>,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">                        selected <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> checked=&quot;checked&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">                        disabled <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> disabled=&quot;disabled&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> data-group=&quot;%s&quot;<span class="pl-pds">&#39;</span></span>, group)),</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span&gt;%s&lt;/span&gt;<span class="pl-pds">&#39;</span></span>, text),</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/li&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">                ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$el</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>).<span class="pl-en">val</span>(value);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> $el;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">$elm</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>optgroup<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> label <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-en">labelTemplate</span>($elm),</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">                    $group <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div/&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">                group <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>group_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i;</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">                disabled <span class="pl-k">=</span> <span class="pl-smi">$elm</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$group</span>.<span class="pl-c1">append</span>([</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;group&quot;&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label class=&quot;optgroup %s&quot; data-group=&quot;%s&quot;&gt;<span class="pl-pds">&#39;</span></span>, disabled <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, group),</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">hideOptgroupCheckboxes</span> <span class="pl-k">||</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">single</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;checkbox&quot; %s %s&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">this</span>.<span class="pl-smi">selectGroupName</span>, disabled <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>disabled=&quot;disabled&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">                    label,</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/li&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">                ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-smi">$elm</span>.<span class="pl-en">children</span>(), <span class="pl-k">function</span> (<span class="pl-smi">i</span>, <span class="pl-smi">elm</span>) {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">$group</span>.<span class="pl-c1">append</span>(<span class="pl-smi">that</span>.<span class="pl-en">optionToHtml</span>(i, elm, group, disabled));</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">$group</span>.<span class="pl-en">html</span>();</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">events</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">toggleOpen</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">                    that[<span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">isOpen</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>close<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>]();</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">$label</span>) {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$label</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span> <span class="pl-k">!==</span> <span class="pl-c1">this</span>) {</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">toggleOpen</span>(e);</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">filter</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">isOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">that</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">e</span>.<span class="pl-c1">stopPropagation</span>(); <span class="pl-c"><span class="pl-c">//</span> Causes lost focus otherwise</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, toggleOpen)</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">onFocus</span>)</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>blur<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>blur<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">onBlur</span>);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">switch</span> (<span class="pl-smi">e</span>.<span class="pl-smi">which</span>) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">case</span> <span class="pl-c1">27</span>: <span class="pl-c"><span class="pl-c">//</span> esc key</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">that</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">that</span>.<span class="pl-smi">$choice</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$searchInput</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> Ensure shift-tab causes lost focus from filter as with clicking away</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">9</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">shiftKey</span>) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">            }).<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> enter or space</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> Avoid selecting/deselecting if no choices made</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">filterAcceptOnEnter</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">e</span>.<span class="pl-smi">which</span> <span class="pl-k">===</span> <span class="pl-c1">13</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">which</span> <span class="pl-k">==</span> <span class="pl-c1">32</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">that</span>.<span class="pl-smi">$searchInput</span>.<span class="pl-en">val</span>()) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-en">filter</span>();</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> checked <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">                    $items <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">$items</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-smi">that</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                    that[checked <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>checkAll<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>uncheckAll<span class="pl-pds">&#39;</span></span>]();</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> { <span class="pl-c"><span class="pl-c">//</span> when the filter option is true</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, checked);</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">$items</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, checked);</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-c1">options</span>[checked <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>onCheckAll<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>onUncheckAll<span class="pl-pds">&#39;</span></span>]();</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> group <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>().<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-group<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">                    $items <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">                    $children <span class="pl-k">=</span> <span class="pl-smi">$items</span>.<span class="pl-en">filter</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-group=&quot;%s&quot;]<span class="pl-pds">&#39;</span></span>, group)),</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">                    checked <span class="pl-k">=</span> <span class="pl-smi">$children</span>.<span class="pl-c1">length</span> <span class="pl-k">!==</span> <span class="pl-smi">$children</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$children</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, checked);</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-en">updateSelectAll</span>();</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-en">onOptgroupClick</span>({</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">                    label<span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>().<span class="pl-c1">text</span>(),</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">                    checked<span class="pl-k">:</span> checked,</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">                    children<span class="pl-k">:</span> <span class="pl-smi">$children</span>.<span class="pl-c1">get</span>(),</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">                    instance<span class="pl-k">:</span> that</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-en">updateSelectAll</span>();</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-en">updateOptGroupSelect</span>();</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-en">onClick</span>({</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">                    label<span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>().<span class="pl-c1">text</span>(),</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">                    value<span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">                    checked<span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">                    instance<span class="pl-k">:</span> that</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">single</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">isOpen</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">keepOpen</span>) {</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">single</span>) {</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> clickedVal <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>() <span class="pl-k">!==</span> clickedVal;</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">                    }).<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">open</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">isOpen</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt;div<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>[<span class="pl-c1">this</span>.<span class="pl-en">animateMethod</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>)]();</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> fix filter bug: no results show</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-c1">parent</span>().<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$noResults</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Fix #77: &#39;All selected&#39; when no options</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">children</span>().<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-c1">parent</span>().<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$noResults</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">container</span>) {</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> offset <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-en">offset</span>();</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-en">appendTo</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">container</span>));</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-en">offset</span>({</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">                    top<span class="pl-k">:</span> <span class="pl-smi">offset</span>.<span class="pl-c1">top</span>,</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">                    left<span class="pl-k">:</span> <span class="pl-smi">offset</span>.<span class="pl-c1">left</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">filter</span>) {</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$searchInput</span>.<span class="pl-en">val</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$searchInput</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">filter</span>();</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">onOpen</span>();</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">close</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">isOpen</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt;div<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>[<span class="pl-c1">this</span>.<span class="pl-en">animateMethod</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>)]();</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">container</span>) {</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>.<span class="pl-c1">append</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-en">css</span>({</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">onClose</span>();</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">animateMethod</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">method</span>) {</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> methods <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">                show<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">                    fade<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fadeIn<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">                    slide<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slideDown<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">                hide<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">                    fade<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fadeOut<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">                    slide<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slideUp<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> methods[method][<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">animate</span>] <span class="pl-k">||</span> method;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">update</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">isInit</span>) {</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> selects <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">displayValues</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-en">getSelects</span>() <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-en">getSelects</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">                $span <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt;span<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">                sl <span class="pl-k">=</span> <span class="pl-smi">selects</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (sl <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$span</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>placeholder<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">placeholder</span>);</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">allSelected</span> <span class="pl-k">&amp;&amp;</span> sl <span class="pl-k">===</span> <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">$disableItems</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$span</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>placeholder<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">allSelected</span>);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ellipsis</span> <span class="pl-k">&amp;&amp;</span> sl <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">minimumCountSelected</span>) {</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$span</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>placeholder<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(<span class="pl-smi">selects</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">minimumCountSelected</span>)</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">                    .<span class="pl-c1">join</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delimiter</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>...<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">countSelected</span> <span class="pl-k">&amp;&amp;</span> sl <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">minimumCountSelected</span>) {</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$span</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>placeholder<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">countSelected</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">                    .<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">selects</span>.<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">                    .<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">$disableItems</span>.<span class="pl-c1">length</span>));</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$span</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>placeholder<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(<span class="pl-smi">selects</span>.<span class="pl-c1">join</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delimiter</span>));</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">addTitle</span>) {</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$span</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-en">getSelects</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> set selects to select</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">val</span>(<span class="pl-c1">this</span>.<span class="pl-en">getSelects</span>()).<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> add selected class to selected li</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input:checked<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">parents</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>).<span class="pl-en">first</span>().<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> trigger &lt;select&gt; change event</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>isInit) {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateSelectAll</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">isInit</span>) {</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $items <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>;</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>isInit) {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">                $items <span class="pl-k">=</span> <span class="pl-smi">$items</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$items</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$items</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-smi">$items</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>isInit <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">onCheckAll</span>();</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateOptGroupSelect</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $items <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>, <span class="pl-k">function</span> (<span class="pl-smi">i</span>, <span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> group <span class="pl-k">=</span> <span class="pl-en">$</span>(val).<span class="pl-c1">parent</span>().<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-group<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">                    $children <span class="pl-k">=</span> <span class="pl-smi">$items</span>.<span class="pl-en">filter</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-group=&quot;%s&quot;]<span class="pl-pds">&#39;</span></span>, group));</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(val).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$children</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">$children</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-smi">$children</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>value or text, default: &#39;value&#39;</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getSelects</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">                texts <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">                values <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[%s]:checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">selectItemName</span>)).<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">texts</span>.<span class="pl-c1">push</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">parents</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>).<span class="pl-en">first</span>().<span class="pl-c1">text</span>());</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">values</span>.<span class="pl-c1">push</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>());</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">                texts <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> html <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">                        text <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>().<span class="pl-c1">text</span>()),</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">                        group <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>().<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>group<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">                        $children <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">$drop</span>.<span class="pl-c1">find</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[%s][data-group=&quot;%s&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">that</span>.<span class="pl-smi">selectItemName</span>, group)),</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">                        $selected <span class="pl-k">=</span> <span class="pl-smi">$children</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">$selected</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(text);</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">$children</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-smi">$selected</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> list <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">$selected</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">                            <span class="pl-smi">list</span>.<span class="pl-c1">push</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>().<span class="pl-c1">text</span>());</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">                        });</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">list</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">texts</span>.<span class="pl-c1">push</span>(<span class="pl-smi">html</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> texts <span class="pl-k">:</span> values;</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setSelects</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">values</span>) {</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$disableItems</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$</span>.<span class="pl-en">each</span>(values, <span class="pl-k">function</span> (<span class="pl-smi">i</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[value=&quot;%s&quot;]<span class="pl-pds">&#39;</span></span>, value)).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-smi">$disableItems</span>.<span class="pl-en">filter</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[value=&quot;%s&quot;]<span class="pl-pds">&#39;</span></span>, value)).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">$disableItems</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-smi">that</span>.<span class="pl-smi">$selectGroups</span>, <span class="pl-k">function</span> (<span class="pl-smi">i</span>, <span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> group <span class="pl-k">=</span> <span class="pl-en">$</span>(val).<span class="pl-c1">parent</span>().<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-group<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">                    $children <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-group=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> group <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(val).<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$children</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">$children</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-smi">$children</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">enable</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">disable</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">checkAll</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">onCheckAll</span>();</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">uncheckAll</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">onUncheckAll</span>();</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">focus</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">onFocus</span>();</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">blur</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$choice</span>.<span class="pl-c1">blur</span>();</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">onBlur</span>();</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">refresh</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">init</span>();</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">destroy</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>.<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">$el</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>multipleSelect<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">filter</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">                text <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$searchInput</span>.<span class="pl-en">val</span>()).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">text</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-c1">parent</span>().<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-c1">parent</span>().<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$disableItems</span>.<span class="pl-c1">parent</span>().<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-c1">parent</span>().<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$noResults</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> $parent <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">                    $parent[<span class="pl-en">removeDiacritics</span>(<span class="pl-smi">$parent</span>.<span class="pl-c1">text</span>().<span class="pl-c1">toLowerCase</span>()).<span class="pl-c1">indexOf</span>(<span class="pl-en">removeDiacritics</span>(text)) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>]();</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$disableItems</span>.<span class="pl-c1">parent</span>().<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$selectGroups</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> $parent <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> group <span class="pl-k">=</span> <span class="pl-smi">$parent</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-group<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">                        $items <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">                    $parent[<span class="pl-smi">$items</span>.<span class="pl-en">filter</span>(<span class="pl-en">sprintf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-group=&quot;%s&quot;]<span class="pl-pds">&#39;</span></span>, group)).<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>]();</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span>Check if no matches found</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">$selectItems</span>.<span class="pl-c1">parent</span>().<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-c1">parent</span>().<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">$noResults</span>.<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">$selectAll</span>.<span class="pl-c1">parent</span>().<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">$noResults</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">updateOptGroupSelect</span>();</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">updateSelectAll</span>();</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">onFilter</span>(text);</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-en">multipleSelect</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> option <span class="pl-k">=</span> <span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">            args <span class="pl-k">=</span> <span class="pl-c1">arguments</span>,</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">            value,</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">            allowedMethods <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>getSelects<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>setSelects<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>enable<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>disable<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>close<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>checkAll<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>uncheckAll<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>blur<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>refresh<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>destroy<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">            ];</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $this <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>),</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">                data <span class="pl-k">=</span> <span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>multipleSelect<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">                options <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">multipleSelect</span>.<span class="pl-smi">defaults</span>,</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(), <span class="pl-k">typeof</span> option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> option);</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>data) {</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">                data <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">MultipleSelect</span>($this, options);</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>multipleSelect<span class="pl-pds">&#39;</span></span>, data);</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(option, allowedMethods) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Unknown method: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">                value <span class="pl-k">=</span> data[option](args[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">data</span>.<span class="pl-en">init</span>();</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (args[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">                    value <span class="pl-k">=</span> data[args[<span class="pl-c1">1</span>]].<span class="pl-c1">apply</span>(data, [].<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(args, <span class="pl-c1">2</span>));</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">typeof</span> value <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> value <span class="pl-k">:</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">multipleSelect</span>.<span class="pl-smi">defaults</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">        name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">        isOpen<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">        placeholder<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">        selectAll<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">        selectAllDelimiter<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">        minimumCountSelected<span class="pl-k">:</span> <span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">        ellipsis<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">        multiple<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">        multipleWidth<span class="pl-k">:</span> <span class="pl-c1">80</span>,</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">        single<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">        filter<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">        width<span class="pl-k">:</span> <span class="pl-c1">undefined</span>,</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">        dropWidth<span class="pl-k">:</span> <span class="pl-c1">undefined</span>,</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">        maxHeight<span class="pl-k">:</span> <span class="pl-c1">250</span>,</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">        container<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">        position<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">        keepOpen<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">        animate<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span> &#39;none&#39;, &#39;fade&#39;, &#39;slide&#39;</span></td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">        displayValues<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">        delimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">        addTitle<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">        filterAcceptOnEnter<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">        hideOptgroupCheckboxes<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">        selectAllText<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Select all<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">        allSelected<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>All selected<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">        countSelected<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span># of % selected<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">        noMatchesFound<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>No matches found<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">styler</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">textTemplate</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$elm</span>) {</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$elm</span>.<span class="pl-en">html</span>();</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">labelTemplate</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$elm</span>) {</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$elm</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onOpen</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onClose</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onCheckAll</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onUncheckAll</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onFocus</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onBlur</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onOptgroupClick</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onClick</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onFilter</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">})(jQuery);</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/wenzhixin/multiple-select/blame/226027ee5a12c4fcde84c8972a0538fa6c8c78ac/multiple-select.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/wenzhixin/multiple-select/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.21245s from unicorn-841715695-j4bnt">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-terms-of-service/" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to blog, text:blog" href="https://github.com/blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-wixGrHLFrl6Tfsdu4IGan6uur8pQK8ZDAxLDBkONYJfl98HFpcI0XkvIYbZw+uCix7BqLlTChwp1RZvCVWSkRQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-4a1b6c3d0f262c2060b73023efedb0d2.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-aTbs5I5qczPyPEQirl2dHdBwK4hWWVqp2mquY3L6aSerzEZytTWZ/DRYdh0bN06h4dE92hnwf0MpgxSHI2p6pw==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-0c2dada20c6cab20f0f6a895e3673f10.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  

  </body>
</html>

