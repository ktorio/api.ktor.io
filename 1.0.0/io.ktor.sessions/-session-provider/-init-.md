---
title: SessionProvider.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionProvider</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">SessionProvider</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionProvider$<init>(kotlin.String, kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionTransport, io.ktor.sessions.SessionTracker)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionProvider$<init>(kotlin.String, kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionTransport, io.ktor.sessions.SessionTracker)/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionProvider$<init>(kotlin.String, kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionTransport, io.ktor.sessions.SessionTracker)/transport">transport</span><span class="symbol">:</span>&nbsp;<a href="../-session-transport/index.html"><span class="identifier">SessionTransport</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionProvider$<init>(kotlin.String, kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionTransport, io.ktor.sessions.SessionTracker)/tracker">tracker</span><span class="symbol">:</span>&nbsp;<a href="../-session-tracker/index.html"><span class="identifier">SessionTracker</span></a><span class="symbol">)</span></code></div>

Specifies a provider for a session with the specific <a href="-init-.html#io.ktor.sessions.SessionProvider$<init>(kotlin.String, kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionTransport, io.ktor.sessions.SessionTracker)/name">name</a> and <a href="-init-.html#io.ktor.sessions.SessionProvider$<init>(kotlin.String, kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionTransport, io.ktor.sessions.SessionTracker)/type">type</a>

### Parameters

<code>transport</code> - specifies the <a href="../-session-transport/index.html">SessionTransport</a> for this provider

<code>tracker</code> - specifies the <a href="../-session-tracker/index.html">SessionTracker</a> for this provider