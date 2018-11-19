---
title: createUpgradeRequestTokenHeader - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./create-upgrade-request-token-header.html">createUpgradeRequestTokenHeader</a></div>

# createUpgradeRequestTokenHeader

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">createUpgradeRequestTokenHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/consumerKey">consumerKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/token">token</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/nonce">nonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/timestamp">timestamp</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span>&nbsp;<span class="symbol">=</span>&nbsp;LocalDateTime.now()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Create an HTTP auth header for OAuth1a upgrade token request

