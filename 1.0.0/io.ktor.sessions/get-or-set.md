---
title: getOrSet - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.sessions</a> / <a href="./get-or-set.html">getOrSet</a></div>

# getOrSet

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">getOrSet</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;findName(T::class)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/generator">generator</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="get-or-set.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="get-or-set.html#T"><span class="identifier">T</span></a></code></div>

Get or generate a new session instance using <a href="get-or-set.html#io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/generator">generator</a> with type <a href="get-or-set.html#T">T</a> (or <a href="get-or-set.html#io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/name">name</a> if specified)

### Exceptions

<code>IllegalStateException</code> - if no session provider registered for type <a href="get-or-set.html#T">T</a> (or <a href="get-or-set.html#io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/name">name</a> if specified)