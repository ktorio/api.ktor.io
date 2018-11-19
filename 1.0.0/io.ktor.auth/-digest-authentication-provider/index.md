---
title: DigestAuthenticationProvider - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">DigestAuthenticationProvider</a></div>

# DigestAuthenticationProvider

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DigestAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a Digest authentication provider

### Parameters

<code>name</code> - is the name of the provider, or <code>null</code> for a default provider

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DigestAuthenticationProvider</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.DigestAuthenticationProvider$<init>(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">)</span></code></div>

Represents a Digest authentication provider


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="digester.html">digester</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">digester</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a></code></div>

Message digest algorithm to be used


</td>
</tr>
<tr>
<td markdown="1">

<a href="realm.html">realm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">realm</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Specifies realm to be passed in <code>WWW-Authenticate</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="user-name-realm-password-digest-provider.html">userNameRealmPasswordDigestProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">userNameRealmPasswordDigestProvider</span><span class="symbol">: </span><span class="keyword">suspend </span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">?</span></code></div>

username and password digest function


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-authentication-provider/name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

is the name of the provider, or <code>null</code> for a default provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-authentication-provider/pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../-authentication-pipeline/index.html"><span class="identifier">AuthenticationPipeline</span></a></code></div>

Authentication pipeline for this provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-authentication-provider/skip-when.html">skipWhen</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">skipWhen</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><span class="symbol">(</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span></code></div>

Authentication filters specifying if authentication is required for particular <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a>


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-authentication-provider/skip-when.html">skipWhen</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">skipWhen</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationProvider$skipWhen(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds an authentication filter to the list


</td>
</tr>
</tbody>
</table>
