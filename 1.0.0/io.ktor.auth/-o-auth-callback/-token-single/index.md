---
title: OAuthCallback.TokenSingle - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuthCallback</a> / <a href="./index.html">TokenSingle</a></div>

# TokenSingle

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">TokenSingle</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuthCallback</span></a></code></div>

OAuth2 token callback parameter

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">TokenSingle</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.OAuthCallback.TokenSingle$<init>(kotlin.String, kotlin.String)/token">token</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.OAuthCallback.TokenSingle$<init>(kotlin.String, kotlin.String)/state">state</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

OAuth2 token callback parameter


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="state.html">state</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">state</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

passed from a client (ktor server) during authorization startup


</td>
</tr>
<tr>
<td markdown="1">

<a href="token.html">token</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">token</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

OAuth2 token provided by server


</td>
</tr>
</tbody>
</table>
