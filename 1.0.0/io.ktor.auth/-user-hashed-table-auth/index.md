---
title: UserHashedTableAuth - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">UserHashedTableAuth</a></div>

# UserHashedTableAuth

<div class="signature"><code><span class="keyword">class </span><span class="identifier">UserHashedTableAuth</span></code></div>

Simple in-memory table that keeps user names and password hashes

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">UserHashedTableAuth</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(kotlin.collections.Map((kotlin.String, kotlin.ByteArray)))/table">table</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">UserHashedTableAuth</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(io.ktor.config.ApplicationConfig)/config">config</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">UserHashedTableAuth</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(kotlin.Function1((kotlin.String, kotlin.ByteArray)), kotlin.collections.Map((kotlin.String, kotlin.ByteArray)))/digester">digester</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(kotlin.Function1((kotlin.String, kotlin.ByteArray)), kotlin.collections.Map((kotlin.String, kotlin.ByteArray)))/table">table</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Simple in-memory table that keeps user names and password hashes


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">digester</span><span class="symbol">: </span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

a hash function to compute password digest


</td>
</tr>
<tr>
<td markdown="1">

<a href="table.html">table</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">table</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">&gt;</span></code></div>

of user names and hashed passwords


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="authenticate.html">authenticate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">authenticate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$authenticate(io.ktor.auth.UserPasswordCredential)/credential">credential</span><span class="symbol">:</span>&nbsp;<a href="../-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-user-id-principal/index.html"><span class="identifier">UserIdPrincipal</span></a><span class="symbol">?</span></code></div>

Authenticate user by <a href="authenticate.html#io.ktor.auth.UserHashedTableAuth$authenticate(io.ktor.auth.UserPasswordCredential)/credential">credential</a> and return an instance of <a href="../-user-id-principal/index.html">UserIdPrincipal</a>
if the <a href="authenticate.html#io.ktor.auth.UserHashedTableAuth$authenticate(io.ktor.auth.UserPasswordCredential)/credential">credential</a> pair is valid


</td>
</tr>
</tbody>
</table>
