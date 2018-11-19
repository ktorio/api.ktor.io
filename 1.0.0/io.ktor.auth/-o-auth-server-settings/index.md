---
title: OAuthServerSettings - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">OAuthServerSettings</a></div>

# OAuthServerSettings

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuthServerSettings</span></code></div>

Represents OAuth server settings

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-o-auth1a-server-settings/index.html">OAuth1aServerSettings</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OAuth1aServerSettings</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuthServerSettings</span></a></code></div>

OAuth1a server settings


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth2-server-settings/index.html">OAuth2ServerSettings</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OAuth2ServerSettings</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuthServerSettings</span></a></code></div>

OAuth2 server settings


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

configuration name


</td>
</tr>
<tr>
<td markdown="1">

<a href="version.html">version</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">version</span><span class="symbol">: </span><a href="../-o-auth-version/index.html"><span class="identifier">OAuthVersion</span></a></code></div>

OAuth version (1a or 2)


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-o-auth1a-server-settings/index.html">OAuth1aServerSettings</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OAuth1aServerSettings</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuthServerSettings</span></a></code></div>

OAuth1a server settings


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth2-server-settings/index.html">OAuth2ServerSettings</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OAuth2ServerSettings</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuthServerSettings</span></a></code></div>

OAuth2 server settings


</td>
</tr>
</tbody>
</table>
