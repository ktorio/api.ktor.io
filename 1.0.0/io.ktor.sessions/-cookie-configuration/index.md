---
title: CookieConfiguration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">CookieConfiguration</a></div>

# CookieConfiguration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">CookieConfiguration</span></code></div>

Cookie configuration being used to send sessions

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CookieConfiguration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Cookie configuration being used to send sessions


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="domain.html">domain</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">domain</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Cookie domain


</td>
</tr>
<tr>
<td markdown="1">

<a href="duration.html">duration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">duration</span><span class="symbol">: </span><span class="identifier">TemporalAmount</span></code></div>

Cookie time to live duration


</td>
</tr>
<tr>
<td markdown="1">

<a href="encoding.html">encoding</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">encoding</span><span class="symbol">: </span><a href="../../io.ktor.http/-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a></code></div>

Cookie encoding


</td>
</tr>
<tr>
<td markdown="1">

<a href="extensions.html">extensions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">extensions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span></code></div>

Any additional extra cookie parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="http-only.html">httpOnly</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">httpOnly</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

This cookie is only for transferring over HTTP(s) and shouldn't be accessible via JavaScript


</td>
</tr>
<tr>
<td markdown="1">

<a href="path.html">path</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">path</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Cookie path


</td>
</tr>
<tr>
<td markdown="1">

<a href="secure.html">secure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">secure</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Send cookies only over secure connection


</td>
</tr>
</tbody>
</table>
