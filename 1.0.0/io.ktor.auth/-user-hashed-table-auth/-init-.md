---
title: UserHashedTableAuth.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">UserHashedTableAuth</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">UserHashedTableAuth</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(kotlin.collections.Map((kotlin.String, kotlin.ByteArray)))/table">table</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">UserHashedTableAuth</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(io.ktor.config.ApplicationConfig)/config">config</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">UserHashedTableAuth</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(kotlin.Function1((kotlin.String, kotlin.ByteArray)), kotlin.collections.Map((kotlin.String, kotlin.ByteArray)))/digester">digester</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.UserHashedTableAuth$<init>(kotlin.Function1((kotlin.String, kotlin.ByteArray)), kotlin.collections.Map((kotlin.String, kotlin.ByteArray)))/table">table</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Simple in-memory table that keeps user names and password hashes

</div>
